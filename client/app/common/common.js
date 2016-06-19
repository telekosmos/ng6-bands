'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

import NotImplemented from './notimplemented/notimplemented';
import LinksList from './linkslist/linkslist';

let commonModule = angular.module('app.common', [
	Navbar.name,
	Hero.name,
	User.name,
  NotImplemented.name,
  LinksList.name
]);

export default commonModule;