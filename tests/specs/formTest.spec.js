import { test, expect } from '../../fixtures/page.fixtures.js';
import * as data from '../../testData/data.json';

test('Test form with valid password', async ({ page, mainPage, firstCardPage, secondCardPage }) => {
  let mainPageIsOpened = await mainPage.isPageOpened()
  await expect(mainPageIsOpened).toBeTruthy();

  await mainPage.clickHereButton();

  let firstCardPageIsOpened = await firstCardPage.isPageOpened();
  await expect(firstCardPageIsOpened).toBeTruthy();

  await firstCardPage.typeTextInputField(data.inputPlaceholders.passwordInput, data.validUserData.password);

  let splittedEmail = data.validUserData.email.split(data.emailSplitSign);

  await firstCardPage.typeTextInputField(data.inputPlaceholders.emailInput, splittedEmail[0]);
  await firstCardPage.typeTextInputField(data.inputPlaceholders.domainInput, splittedEmail[1]);

  // dropdown
  await page.locator('//div[@class="dropdown__opener"]').click();
  await page.locator('//div[@class="dropdown__list-item" and text()=".com"]').click();
  // dropdown

  await firstCardPage.clickTermsAndConditionsCheckbox();

  await firstCardPage.clickFirstCardPageButton(data.buttonClasses.nextCardButton);

  let secondCardPageIsOpened = await secondCardPage.isPageOpened();
  await expect(secondCardPageIsOpened).toBeTruthy();
});

test('Test form with invalid password', async ({ page, mainPage, firstCardPage, secondCardPage }) => {
  let mainPageIsOpened = await mainPage.isPageOpened()
  await expect(mainPageIsOpened).toBeTruthy();

  await mainPage.clickHereButton();

  let firstCardPageIsOpened = await firstCardPage.isPageOpened();
  await expect(firstCardPageIsOpened).toBeTruthy();

  await firstCardPage.typeTextInputField(data.inputPlaceholders.passwordInput, data.invalidUserData.password);

  let splittedEmail = data.validUserData.email.split(data.emailSplitSign);

  await firstCardPage.typeTextInputField(data.inputPlaceholders.emailInput, splittedEmail[0]);
  await firstCardPage.typeTextInputField(data.inputPlaceholders.domainInput, splittedEmail[1]);

  // dropdown
  await page.locator('//div[@class="dropdown__opener"]').click();
  await page.locator('//div[@class="dropdown__list-item" and text()=".com"]').click();
  // dropdown

  await firstCardPage.clickTermsAndConditionsCheckbox();

  await firstCardPage.clickFirstCardPageButton(data.buttonClasses.nextCardButton);

  let secondCardPageIsOpened = await secondCardPage.isPageOpened();
  await expect(secondCardPageIsOpened).toBeFalsy();
});