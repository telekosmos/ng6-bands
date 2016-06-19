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
      bandName: '@'
    },
    controller: controller,
    controllerAs: 'vm',
		bindToController: true
	};
};

export default bandComponent;
