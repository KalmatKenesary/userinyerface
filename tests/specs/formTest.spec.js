import { test, expect } from '../../fixtures/page.fixtures.js';
import * as data from '../../testData/data.json';
import * as allure from 'allure-js-commons';

test('Test form with valid password', async ({ mainPage, firstCardPage, secondCardPage }) => {
  await allure.parentSuite('Test for website');
  await allure.suite('Test for form');
  await allure.subSuite('Test for form with valid password');

  await allure.step('Assert main page is opened', async () => {
    let mainPageIsOpened = await mainPage.isPageOpened()
    await expect(mainPageIsOpened).toBeTruthy();
  });

  // hello 1

  const a = 1;
  a = 2;

  await allure.step('Click here button', async () => {
    await mainPage.clickHereButton();
  });

  await allure.step('Assert first card is opened', async () => {
    let firstCardPageIsOpened = await firstCardPage.isPageOpened();
    await expect(firstCardPageIsOpened).toBeTruthy();
  });

  await allure.step('Type password into input filed', async () => {
    await firstCardPage.typeTextInputField(data.inputPlaceholders.passwordInput, data.validUserData.password);
  });

  let splittedEmail = data.validUserData.email.split(data.emailSplitSign);

  await allure.step('Type email', async () => {
    await allure.step('Type email input', async (ctx) => {
      await ctx.parameter('email', splittedEmail[0]);
      await firstCardPage.typeTextInputField(data.inputPlaceholders.emailInput, splittedEmail[0]);
    });

    await allure.step('Type email domain input', async (ctx) => {
      await ctx.parameter('domail', splittedEmail[1]);
      await firstCardPage.typeTextInputField(data.inputPlaceholders.domainInput, splittedEmail[1]);
    });
  });

  await allure.step('Choose item in dropdown', async () => {
    await allure.step('Click dropdown opener button', async () => {
      await firstCardPage.clickDropDownOpenerButton();
    });
    await allure.step('Click dropdown item', async (ctx) => {
      await ctx.parameter('item', data.validUserData.dropDownEmailItems.com);
      await firstCardPage.clickDropDownItem(data.validUserData.dropDownEmailItems.com);
    });
  });

  await allure.step('Click terms and conditions checkbox', async () => {
    await firstCardPage.clickTermsAndConditionsCheckbox();
  });

  await allure.step('Click first card page button', async () => {
    await firstCardPage.clickFirstCardPageButton(data.buttonClasses.nextCardButton);
  });

  await allure.step('Assert second cart is opened', async () => {
    let secondCardPageIsOpened = await secondCardPage.isPageOpened();
    await expect(secondCardPageIsOpened).toBeTruthy();
  });

  await allure.attachment(
    'Screenshot',
    await page.screenshot(),
    'image/png'
  );
});

test.skip('Test form with invalid password', async ({ page, mainPage, firstCardPage, secondCardPage }) => {
  let mainPageIsOpened = await mainPage.isPageOpened()
  await expect(mainPageIsOpened).toBeTruthy();

  await mainPage.clickHereButton();

  let firstCardPageIsOpened = await firstCardPage.isPageOpened();
  await expect(firstCardPageIsOpened).toBeTruthy();

  await firstCardPage.typeTextInputField(data.inputPlaceholders.passwordInput, data.invalidUserData.password);

  let splittedEmail = data.validUserData.email.split(data.emailSplitSign);

  await firstCardPage.typeTextInputField(data.inputPlaceholders.emailInput, splittedEmail[0]);
  await firstCardPage.typeTextInputField(data.inputPlaceholders.domainInput, splittedEmail[1]);

  await firstCardPage.clickDropDownOpenerButton();
  await firstCardPage.clickDropDownItem(data.validUserData.dropDownEmailItems.com);

  await firstCardPage.clickTermsAndConditionsCheckbox();

  await firstCardPage.clickFirstCardPageButton(data.buttonClasses.nextCardButton);

  let secondCardPageIsOpened = await secondCardPage.isPageOpened();
  await expect(secondCardPageIsOpened).toBeFalsy();
});