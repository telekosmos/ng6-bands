'use strict';

// import _find from 'lodash.find';

class AppUtil {
  constructor($state, ROUTES, $http, BandsCache) {
    this._$state = $state;
    this._ROUTES = ROUTES;
    this._cache = BandsCache;
    this._$http = $http;
  }

  getCompleteStates () {
    let states = this._$state.get().filter((state) => {
      return state.name.length > 0 && !state.abstract
    });
    states = states.map(state => {
      let thisRoute = this._ROUTES.filter(route => route.url == state.url)[0];
      let pageTit = thisRoute? thisRoute.pageTitle: 'Missing route';
      return Object.assign(state, {pageTitle: pageTit});
    });

    // console.log(`states service: ${JSON.stringify(states)}`)
    return states;  
  }

  /**
   * Get info for a band from remotes
   * @param  {String} band the name of the state for that band url
   * @return {[type]}      [description]
   */
  getBandMedia(band) {
    // TODO use cache!!!
    // let bandObj = _find(this._ROUTES, route => route.name == band);
    let bandObj = this._ROUTES.filter((route => route.name == band))[0];

    // let wiki = this._$http.get(bandObj.wiki);
    let wiki = this._$http.jsonp(bandObj.wiki+'JSON_CALLBACK')
    return wiki.then((resp) => {
      const pages = resp.data.query.pages;
      const pagesKey = Object.keys(pages)[0];
      const info = pages[pagesKey];
      const description = info.extract.substring(0, info.extract.indexOf('<p>', 3));
      // const metas = ['rock', 'band', 'music'];
      let metas = [], auxArr, regexp = /<[i|b]>(.*?)<\/[i|b]>/gi;
      while ((auxArr = regexp.exec(info.extract)) !== null) {
        let meta = auxArr[0].substring(3, auxArr[0].length-4);
        metas.push(meta);
      }

      let bandInfo = {
        img: info.thumbnail.source,
        metaKeys: metas,
        metaDesc: description,
        ogTit: info.title,
        ogImg: info.thumbnail.source,
        ogType: 'website',
        ogUrl: bandObj.url,
        pageTitle: bandObj.pageTitle,
        youtube: bandObj.youtube,
        text: info.extract
      };
      // console.log(`[AppUtil.getBandMedia] ${JSON.stringify(bandInfo)}`);
      return bandInfo;
    }) // EO return wiki
  } 
}


AppUtil.$inject = ['$state', 'ROUTES', '$http', 'BandsCache'];
export default AppUtil;