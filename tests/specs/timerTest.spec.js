import { test, expect } from '../../fixtures/page.fixtures.js';
import * as data from '../../testData/data.json';

let c = 0;
let a = false;

test('Timer test', async ({ mainPage, firstCardPage }) => {
  await expect(mainPage.isPageOpened()).toBeTruthy();

  await mainPage.clickHereButton();

  // Some hotfix code lines

  if (c === 1) {
    a = true;
  }

  c++;

  expect(a).toBeTruthy();

  await expect(firstCardPage.isPageOpened()).toBeTruthy();
  let timerText = await firstCardPage.getFirstCardPageLabelText(data.labelClasses.timerLabel);
  await expect(timerText).toEqual(data.timerStart);
})