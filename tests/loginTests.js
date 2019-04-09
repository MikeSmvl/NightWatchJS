// Define username and password
let usr = 'admin';
let pwd = '12345';

module.exports = {
  '@disabled': false,

  'Successful credential login with text validation': function(client) {
    client
      .url('http://testing-ground.scraping.pro/login')
      .waitForElementPresent('body', 1000)
      .login(usr, pwd)
      .assert.containsText('#content', 'WELCOME :)');
  },

  'Invalid credential login with text and text validation': function(client) {
    client
      .url('http://testing-ground.scraping.pro/login')
      .waitForElementPresent('body', 1000)
      .login(usr, pwd)
      .assert.containsText('#content', 'ACCESS DENIED!');
  }
};
