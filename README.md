# NG6 Bands
Minimal sample app based on ES6, angular 1.4, JSPM.
Strongly based in [NG6-starter for jspm](https://github.com/AngularClass/NG6-starter/tree/jspm) and [Ionic starter for jspm](https://github.com/telekosmos/ionic6-jspm)

## Statement
Simple client angular app to display information about (predefined) bands.

## Feats
- Routes defined in `app.routes.js`
- Easily add new bands.
- Modular design.
- Tags for [Open Grap Protocol](http://ogp.me) and normal metas.
- Page names different than page title (in order to correctly display in list in home)

## Quick start
- `git clone` this repo
- `npm install`
- `jspm install`
- `karma start` to run tests
- `gulp serve` will start a dev server with `browser-sync` serving the client folder and listens for changes
- `gulp build` will build an static project in `dist` directory

## Notes
- If support for html5mode (removing trailing/middle `#`) is necessary, changes in server must be carried out and `<base>` tag updated