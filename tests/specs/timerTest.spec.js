import { test, expect } from '../../fixtures/page.fixtures.js';
import * as data from '../../testData/data.json';

test.skip('Timer test', async ({ mainPage, firstCardPage }) => {
  await expect(mainPage.isPageOpened()).toBeTruthy();

  await mainPage.clickHereButton();

  await expect(firstCardPage.isPageOpened()).toBeTruthy();
  let timerText = await firstCardPage.getFirstCardPageLabelText(data.labelClasses.timerLabel);
  await expect(timerText).toEqual(data.timerStart);
})