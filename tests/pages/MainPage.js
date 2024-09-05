import { Button }  from '../../framework/elements/index.js';
import BaseForm from "../../framework/page/BaseForm.js";

export class MainPage extends BaseForm {
  constructor(page) {
    super(
      new Button(page, '//button[@class="start__button"]', 'Unique button of the main page'),
      'Main page'
    );

    this.hereButton = new Button(page, '//a[@href="/game.html"]', 'Button for open game');
  }

  async clickHereButton() {
    await this.hereButton.click();
  }
}