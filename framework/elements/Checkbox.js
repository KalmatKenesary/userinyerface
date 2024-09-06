import { logger } from "../utils/Logger.js";
import BaseElement from "./BaseElement.js";
import ElementType from "../constants/ElementType.js";

export class Checkbox extends BaseElement {
  constructor(page, locator, name) {
    super(page, locator, name);
    this.elementType = ElementType.CHECKBOX;
  }

  /**
   * Perform check action on the checkbox element
   * @returns {Promise<void>}
   */
  async check() {
    logger.info(`${this.logText()} [ACTION]:check checkbox`);
    await this._get().check();
  }

  /**
   * Perform uncheck action on the checkbox element
   * @returns {Promise<void>}
   */
  async uncheck() {
    logger.info(`${this.logText()} [ACTION]:uncheck checkbox`);
    await this._get().uncheck();
  }

  /**
   * Check state of the checkbox element
   * @returns {Promise<boolean>}
   */
  async isChecked() {
    logger.info(`${this.logText()} [ACTION]:return checkbox state`);
    let result = await this._get().isChecked();
    return result;
  }
}