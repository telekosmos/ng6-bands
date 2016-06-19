import angular from 'angular';
import Home from './home/home';
import About from './about/about'; 
import InProgress from './inprogress/inprogress';

let componentModule = angular.module('app.components', [
	Home.name,
	About.name,
  InProgress.name
]);

export default componentModule;