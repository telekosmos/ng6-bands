'use strict';

import angular from 'angular';
// import 'angular-ui-router';
import linksListComponent from './linksList.component';

let navbarModule = angular.module('linksList', [
])
.directive('linksList', linksListComponent);

export default navbarModule;