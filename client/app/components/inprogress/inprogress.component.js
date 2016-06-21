import template from './inprogress.html!text';
import controller from './inprogress.controller';
import './inprogress.css!';

let inprogressComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default inprogressComponent;
