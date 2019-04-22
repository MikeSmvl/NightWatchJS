// Define username and password
let usr = 'admin';
let pwd = '12345';

module.exports = {
  '@disabled': false,
  // Connect to the webpage and login before each test case
  beforeEach: function(client, done) {
    client
      .resizeWindow(1680, 968, done) // Baseline images were taken using these dimensions (1680x968)
      .url('http://testing-ground.scraping.pro/login')
      .waitForElementPresent('body', 1000);
  },

  'Successful credential login with text validation': function(client) {
    client.login(usr, pwd).assert.containsText('#content', 'WELCOME :)');
  },

  'Successful credential login with image validation': function(client) {
    client
      .login(usr, pwd)
      .element('css selector', '#case_login', function(result) {
        if (result.status != -1) {
          //Element exists, do something
          client.compareScreenshot('login-success-baseline.png');
        }
      });
  },

  'Invalid credential login with text and text validation': function(client) {
    client
      .login('invalid', 'credential')
      .assert.containsText('#content', 'ACCESS DENIED!');
  },

  'Invalid credential login with text and image validation': function(client) {
    client
      .login('invalid', 'credential')
      .element('css selector', '#case_login', function(result) {
        if (result.status != -1) {
          //Element exists, do something
          client.compareScreenshot('login-denied-baseline.png');
        }
      })
      .end();
  }
};
