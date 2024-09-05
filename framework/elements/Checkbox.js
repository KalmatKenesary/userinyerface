import BaseElement from "./BaseElement.js";

export class Checkbox extends BaseElement {
  constructor(page, locator, name) {
    super(page, locator, name);
  }

  async check() {
    await this._get().check();
  }

  async uncheck() {
    await this._get().uncheck();
  }

  async isChecked() {
    let result = await this._get().isChecked();
    return result;
  }
}