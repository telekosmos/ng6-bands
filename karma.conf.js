// Karma configuration

module.exports = function(config) {
  config.set({

    configFile: './jspm.config.js',
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'mocha', 'chai-as-promised', 'chai'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // list of files / patterns to load in the browser
    files: [],

    jspm: {
      // Edit this to your needs
      config: 'jspm.config.js',
      packages: 'client/jspm_packages',
      // loadFiles: ['client/app/**/*.spec.js'],
      loadFiles: ['client/app/app.spec.js'],
      serveFiles: [
        'client/app/**/*.js',
        'client/app/**/*.html',
        'client/app/**/*.css'
      ],
      paths: {
        'github:*': 'base/client/jspm_packages/github/*',
        'npm:*': 'base/client/jspm_packages/npm/*',
        'js/*': 'base/client/js/*'
      },
      urlRoot: './'
    },

    proxies: {
      // '/jspm_packages': '/base/jspm_packages',
      // '/jspm.config.js': '/base/jspm.config.js'
      '/client': '/base/client'
    },

    // list of files to exclude
    exclude: [],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    client: {
      captureConsole: true,
      mocha: {
        bail: false,
        // require: 'should'
        reporter: 'spec',
        ui: 'bdd'
      }
    }

  });
};
