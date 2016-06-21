'use strict'; 

import angular from 'angular';
import 'angular-ui-router';
import inprogressComponent from './inprogress.component';

let inprogressModule = angular.module('inprogress', [
	'ui.router'
])
.config(($stateProvider, $urlRouterProvider) => {
  
  $stateProvider
    .state('404', {
      url: '',
      abstract: true,
      template: '<navbar></navbar><ui-view/>'
    })
    .state('404.foo', {
      url: '/foo',
      template: '<in-progress></in-progress>'
    })
    .state('404.bar', {
      url: '/bar',
      template: '<in-progress></in-progress>'
    });
    $urlRouterProvider.otherwise('/');
})
.directive('inProgress', inprogressComponent);

export default inprogressModule;