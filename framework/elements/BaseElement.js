import ElementStateProvider from "./helper/StateProvider";

export default class BaseElement {
  constructor(page, locator, name) {
    this.page = page;
    this.locator = locator;
    this.name = name;
  }

  _get() {
    let selector;
    if (typeof this.locator === 'string') {
      selector = this.page.locator(this.locator);
    } else {
      selector = this.locator;
    }
    return selector;
  }

  getName() {
    return this.name;
  }

  state() {
    return new ElementStateProvider(this._get(), this.name);
  }
 
  async click() {
    await this._get().click();
  }

  async textContent() {
    return await this._get().textContent();
  }
}