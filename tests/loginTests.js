// Define username and password
let usr = 'admin';
let pwd = '12345';

module.exports = {
  '@disabled': false,

  'Successful credential login with text validation': function(client) {
    client
      .url('http://testing-ground.scraping.pro/login')
      .waitForElementPresent('body', 1000)
      .waitForElementVisible('input[id=usr]', 1000)
      .setValue('input[id=usr]', usr)
      .waitForElementVisible('input[id=pwd]', 2000)
      .setValue('input[id=pwd]', [pwd, client.Keys.ENTER])
      .waitForElementVisible('div[id=case_login]', 1000)
      .assert.containsText('#content', 'WELCOME :)');
  },

  'Invalid credential login with text and text validation': function(client) {
    client
      .url('http://testing-ground.scraping.pro/login')
      .waitForElementPresent('body', 1000)
      .waitForElementVisible('input[id=usr]', 1000)
      .setValue('input[id=usr]', usr)
      .waitForElementVisible('input[id=pwd]', 2000)
      .setValue('input[id=pwd]', [pwd, client.Keys.ENTER])
      .waitForElementVisible('div[id=case_login]', 1000)
      .assert.containsText('#content', 'ACCESS DENIED!');
  }
};
