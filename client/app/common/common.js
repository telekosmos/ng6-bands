'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';

import LinksList from './linkslist/linkslist';

let commonModule = angular.module('app.common', [
	Navbar.name,
	LinksList.name
]);

export default commonModule;