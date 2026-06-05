// frontend/karma.conf.js
/** @type {import('karma').Config} */
module.exports = function (config) {
  config.set({
    browsers: [process.env.CI ? 'ChromeHeadlessNoSandbox' : 'Chrome'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--remote-debugging-port=9222'
        ]
      }
    },
  });
};