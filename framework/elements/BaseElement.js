import { logger } from "../utils/Logger.js";
import ElementStateProvider from "./helper/StateProvider";
import ElementType from "../constants/ElementType.js";

export default class BaseElement {
  constructor(page, locator, name) {
    this.page = page;
    this.locator = locator;
    this.name = name;
    this.elementType = ElementType.ELEMENT;
  }

  _get() {
    let selector;
    logger.info(`${this.logText()} [ACTION]:get selector element`);
    if (typeof this.locator === 'string') {
      selector = this.page.locator(this.locator);
    } else {
      selector = this.locator;
    }
    return selector;
  }

  state = () => new ElementStateProvider(this._get(), this.name)
 
  logText = () => `[TYPE]:${this.elementType} [NAME]:${this.name}`

  /**
   * Get name of the page
   * @returns {string} Name of the page
   */
  getName() {
    return this.name;
  }

  /**
   * Perform click event of the element
   * @return {Promise<void>}
   */
  async click() {
    logger.info(`${this.logText()} [ACTION]:click button`);
    return await this._get().click();
  }

  /**
   * Get text content of the element
   * @returns {null | string} text content of the element
   */
  async textContent() {
    logger.info(`${this.logText()} [ACTION]:get text element`);
    return await this._get().textContent();
  }
}