exports.command = function(username, password) {
  return this.waitForElementVisible('input[id=usr]', 60000)
    .setValue('input[id=usr]', username)
    .waitForElementVisible('input[id=pwd]', 60000)
    .setValue('input[id=pwd]', [password, this.Keys.ENTER])
    .waitForElementVisible('div[id=case_login]', 60000);
};
