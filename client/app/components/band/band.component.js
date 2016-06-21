'use strict';

import template from './band.html!text';
import controller from './band.controller';
import './band.css!';

let bandComponent = function(){
  let linkFunc = function(scope, elem, attrs) {

  }

	return {
		template: template,
		restrict: 'E',		
		scope: {
      bandName: '@', // name of the state
      bandTitle: '@' // band proper name
    },
    controller: controller,
    controllerAs: 'vm',
		bindToController: true
	};
};

export default bandComponent;
