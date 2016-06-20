'use strict';

const routes = [{
  url: '/foo',
  pageTitle: 'Foo',
}, {
  url: '/bar',
  pageTitle: 'Bar'
}, {
  url: '/the-rolling-stones',
  name: 'the-rolling-stones',
  pageTitle: 'The Rolling Stones',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=The%20Rolling%20Stones&pithumbsize=1500&callback=',
  youtube: 'O4irXQhgMqg',  
}, {
  url: '/the-beatles',
  pageTitle: 'The Beatles',
  name: 'the-beatles',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=The%20Beatles&pithumbsize=1500&callback=',
  youtube: 'NCtzkaL2t_Y'
}, {
  url: '/queen',
  name: 'queen',
  pageTitle: 'Queen',
  type: 'band',
  wiki: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages|info|extracts&exintro=&titles=Queen%20(band)&pithumbsize=1500&callback=',
  youtube: 'fJ9rUzIMcZQ'
}, {
  url: '/',
  pageTitle: 'Home'
}, {
  url: '/about',
  pageTitle: 'About'
}];

export default routes;