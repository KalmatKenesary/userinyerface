import { test as base } from '@playwright/test'
import { MainPage } from '../tests/pages/MainPage.js';
import { FirstCardPage } from '../tests/pages/FirstCardPage.js';
import { SecondCardPage } from '../tests/pages/SecondCardPage.js';

export const test = base.extend({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  firstCardPage: async ({ page }, use) => {
    await use(new FirstCardPage(page));
  },
  secondCardPage: async ({ page }, use) => {
    await use(new SecondCardPage(page));
  }
});

export { expect } from '@playwright/test';