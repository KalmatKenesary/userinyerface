import { logger } from "../utils/Logger.js";
import ElementType from "../constants/ElementType.js";
import BaseElement from "./BaseElement.js";

export class Input extends BaseElement {
  constructor(page, locator, name) {
    super(page, locator, name);
    this.elementType = ElementType.INPUT;
  }

  /**
   * Fill the input element
   * @param {string} text - argument, that will insert into the input field.
   * @returns {void}
   */
  async typeText(text) {
    logger.info(`${this.logText()} [ACTION]:clear input field`);
    await this._get().fill('');
    logger.info(`${this.logText()} [ACTION]:fill input field with value ${text}`);
    await this._get().fill(text);
  }
}