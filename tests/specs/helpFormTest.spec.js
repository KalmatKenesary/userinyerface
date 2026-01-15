import { test, expect } from "../../fixtures/page.fixtures.js";
import * as data from '../../testData/data.json';

test('Help form test', async ({ mainPage, firstCardPage }) => {

  await expect(mainPage.isPageOpened()).toBeTruthy();

  await mainPage.clickHereButton();

  // second commit

  await expect(firstCardPage.isPageOpened()).toBeTruthy();

  await firstCardPage.clickFirstCardPageButton(data.buttonClasses.helpFormButton);

  await expect(firstCardPage.firstCardPageLabelIsDisplayed(data.labelClasses.helpResponseLabel)).toBeTruthy();
});
