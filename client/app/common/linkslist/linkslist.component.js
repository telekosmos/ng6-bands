'use strict';

import template from './linkslist.html!text';
import controller from './linkslist.controller';
import './linkslist.css!';

let linksListComponent = function(){
  return {
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'E',    
    scope: {}    
  };
};

export default linksListComponent;