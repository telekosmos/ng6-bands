'use strict';

class NavbarController {
	constructor($state, ROUTES, util) {
		this.name = 'navbar';
    /*
    this._states = $state.get();
    this._states = this._states.filter((state) => {
      return state.name.length > 0 && !state.abstract
    });
    this._states = this._states.map(state => {
      let thisRoute = ROUTES.filter(route => route.url == state.url)[0];
      let pageTit = thisRoute.pageTitle;
      return Object.assign(state, {pageTitle: pageTit});
    });
    */

    this._states = util.getCompleteStates();
    console.log(`[NavbarController()] ${JSON.stringify(this._states)}`);
	}
}

NavbarController.$inject = ['$state', 'ROUTES', 'util'];
export default NavbarController;