'use strict';

class AppUtil {
  constructor($state, ROUTES) {
    this._$state = $state;
    this._ROUTES = ROUTES;
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

  getBandMedia(band) {
    // get all band media and use cache!!!
  }
}


AppUtil.$inject = ['$state', 'ROUTES'];
export default AppUtil;