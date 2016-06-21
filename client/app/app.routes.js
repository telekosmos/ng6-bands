'use strict';

const routes = [{
  url: '/foo',
  pageName: 'Foo',
  pageTitle: 'Angular Rocks'
}, {
  url: '/bar',
  pageName: 'Bar',
  pageTitle: 'Angular Rocks'
}, {
  url: '/the-rolling-stones',
  name: 'the-rolling-stones',
  pageName: 'The Rolling Stones',
  pageTitle: 'The Rolling Stones',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=The%20Rolling%20Stones&pithumbsize=1500&callback=',
  youtube: 'O4irXQhgMqg',  
}, {
  url: '/the-beatles',
  pageName: 'The Beatles',
  pageTitle: 'The Beatles',
  name: 'the-beatles',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=The%20Beatles&pithumbsize=1500&callback=',
  youtube: 'NCtzkaL2t_Y'
}, {
  url: '/queen',
  name: 'queen',
  pageTitle: 'Queen',
  pageName: 'Queen',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=Queen%20(band)&pithumbsize=1500&callback=',
  youtube: 'fJ9rUzIMcZQ'
}, {
  url: '/u2',
  name: 'u2',
  pageTitle: 'U2',
  pageName: 'U2',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=U2&pithumbsize=1500&callback=',
  youtube: 'BYOu7N8e9PU'
}, {
  url: '/',
  pageTitle: 'Angular Rocks',
  pageName: 'Home'
}];

export default routes;