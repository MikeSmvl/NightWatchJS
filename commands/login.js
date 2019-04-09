exports.command = function(username, password) {
  return this.waitForElementVisible('input[id=usr]', 1000)
    .setValue('input[id=usr]', username)
    .waitForElementVisible('input[id=pwd]', 2000)
    .setValue('input[id=pwd]', [password, this.Keys.ENTER])
    .waitForElementVisible('div[id=case_login]', 1000);
};
