import { test, expect } from '@playwright/test';
import { Button, Label }  from '../../framework/elements/index.js';
import BaseElement from '../../framework/elements/BaseElement.js';

test('Help form', async ({ page }) => {
  await page.goto('https://userinyerface.com/');

  let noButton = new Button(page, '//button[@class="start__button"]', 'Unique button of the main page');
  let noButtonIsVisible = await noButton.state().isVisible();
  await expect(noButtonIsVisible).toEqual(true);

  let hereButton = new Button(page, '//a[@href="/game.html"]', 'Button for open game');
  await hereButton.click();

  let loginForm = new BaseElement(page, '//div[@class="login-form"]', 'Unique login form of game page');
  let loginFormIsVisible = await loginForm.state().isVisible();
  await expect(loginFormIsVisible).toEqual(true);

  let helpButton = new Button(page, '//a[@class="help-form__help-button"]', 'Button for help response');
  await helpButton.click();

  let helpResponseLabel = new Label(page, '//div[@class="help-form__response"]', 'Reponse label');
  let helpResponseLabelIsVisible = await helpResponseLabel.state().isVisible();
  await expect(helpResponseLabelIsVisible).toEqual(true);
});
