import BaseElement from "./BaseElement.js";

export class Input extends BaseElement {
  constructor(page, locator, name) {
    super(page, locator, name);
  }

  async typeText(text) {
    await this._get().fill('');
    await this._get().fill(text);
  }
}