'use strict';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import bandComponent from './band.component';

import routes from '../../app.routes';

let bandModule = angular.module('band', [
	'ui.router', 'ngSanitize'
])
.config(($stateProvider, $urlRouterProvider)=>{
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('band', {
      url: '',
      abstract: true,
      template: '<ui-view/>'
    });

  let bandRoutes = routes.filter(route => !!route.type && route.type == 'band');
  bandRoutes.forEach(br => {
    $stateProvider.state(br.name, {
      url: br.url,
      template: '<band band-title="'+br.pageTitle+'" band-name="'+br.name+'"></band>'
    })
  })
  /*
    .state('the-rolling-stones', {
      url: '/the-rolling-stones',
      template: '<band></band>'
    })
    .state('queen', {
      url: '/queen',
      template: '<band></band>'
    })
    .state('the-beatles', {
      url: '/the-beatles',
      template: '<band></band>'
    })
  */
})
.directive('band', bandComponent);

export default bandModule;