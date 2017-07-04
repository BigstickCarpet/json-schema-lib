// Mocha configuration
(function () {
  'use strict';

  if (host.browser) {
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.asyncOnly();
    mocha.checkLeaks();
    mocha.globals([]);
  }

  beforeEach(function () {
    // Flag TravisCI and SauceLabs as being very slow environments
    var isSlowEnvironment = host.env.TRAVIS || host.karma;

    // Most of our tests perform multiple AJAX requests,
    // so we need to increase the timeouts to allow for that
    this.currentTest.timeout(isSlowEnvironment ? 10000 : 4000);
    this.currentTest.slow(1000);
  });

}());
