'use strict';

class NavbarController {
	constructor($state, ROUTES, util) {
		this.name = 'navbar';
    this._states = util.getCompleteStates();
    // console.log(`[NavbarController()] ${JSON.stringify(this._states)}`);
	}
}

NavbarController.$inject = ['$state', 'ROUTES', 'util'];
export default NavbarController;