'use strict';

import angular from 'angular';
import 'angular-ui-router';
import routes from './app.routes';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

let appModule = angular.module('app', [
	'ui.router',
	Common.name,
	Components.name
])
.config(($locationProvider) => {
	// $locationProvider.html5Mode(true).hashPrefix('!')
})
.run(($rootScope, $state) => {
	$rootScope.descriptionContent = "BIG CRAP!!!";
	$rootScope.pageTitle = "XXXApp";
	let states = $state.get();
	console.log(`${JSON.stringify(states)}`);

	$rootScope.$on('$stateChangeStart', (ev, toSt, toPrm, fromSt, fromPrm) => {
		// console.log(`transition: ${JSON.stringify(fromSt)} -> ${JSON.stringify(toSt)}`);
		if (!!toSt.name)
			// $rootScope.pageTitle = toSt.name + '::XXXApp';
			$rootScope.pageTitle = routes.filter((route) => route.url == toSt.url)[0].pageTitle;
	});
})
.constant('ROUTES', routes)
.service('util', ['$state', 'ROUTES', function($state, ROUTES) {
	this.getCompleteStates = function() {
		let states = $state.get().filter((state) => {
		  return state.name.length > 0 && !state.abstract
		});
		states = states.map(state => {
		  let thisRoute = ROUTES.filter(route => route.url == state.url)[0];
		  let pageTit = thisRoute.pageTitle;
		  return Object.assign(state, {pageTitle: pageTit});
		});

		console.log(`states service: ${JSON.stringify(states)}`)
		return states;	
	};
	
}])
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
var container = document.getElementById('app-container');
var noAngularDOM;

angular.element(document).ready(() => {
	if(location.origin.match(/localhost/)) {
		System.trace = true;
		noAngularDOM = container.cloneNode(true);
		if ((!System.hotReloader)) {
			System.import('capaj/systemjs-hot-reloader').then(HotReloader => {
				System.hotReloader = new HotReloader.default('http://localhost:8081/');
				System.hotReloader.on('change', function (name) {
					console.log(name, 'changed')
				})
			})
		}
	}
	// angular.bootstrap(container, [appModule.name]), {
	angular.bootstrap(document, [appModule.name]), { 
		strictDi: true
	}
});

export default appModule;
export function __unload(){
	container = document.getElementById('app-container');
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}
