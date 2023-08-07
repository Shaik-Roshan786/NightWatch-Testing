describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body') // The browser waits for the 'body' element to be visible before proceeding.
      .assert.titleContains('Ecosia') // Assertion: The browser checks if the current page title contains the text 'Ecosia'.
      .assert.visible('input[type=search]')// Assertion: The browser checks if an input element with the attribute 'type=search' is visible.
      .setValue('input[type=search]', 'nightwatch') // The browser sets the value 'nightwatch' in the input element with the attribute 'type=search'.
      .assert.visible('button[type=submit]')// Assertion: The browser checks if a button element with the attribute 'type=submit' is visible.
      .click('button[type=submit]') // The browser clicks on the button element with the attribute 'type=submit'.
      .assert.textContains('.layout__content', 'Nightwatch.js'); // Assertion: The browser checks if the element with the class 'layout__content' contains the text 'Nightwatch.js'.
  });

  after(browser => browser.end());
});
