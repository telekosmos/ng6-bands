import angular from 'angular';
import Home from './home/home';
import About from './about/about'; 
import InProgress from './inprogress/inprogress';
import Band from './band/band';

let componentModule = angular.module('app.components', [
	Home.name,
	About.name,
  InProgress.name,
  Band.name
]);

export default componentModule;