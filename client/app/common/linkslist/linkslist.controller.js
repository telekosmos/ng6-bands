'use strict';

class LinksListController {
  constructor(util) {
    this.states = util.getCompleteStates();
  }

}

LinksListController.$inject = ['util'];

export default LinksListController;