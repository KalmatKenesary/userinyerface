import { logger } from "../../utils/Logger.js";

export default class ElementStateProvider {
  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
  }

  /**
   * Check element is visible
   * @returns {Promise<boolean>} true is visible else false is not visible
   */
  async isVisible() {
    logger.info(`${this.name} [ACTION]:check is visible`);
    let result = await this.selector.isVisible();
    return result;
  }

  /**
   * Wait for element to be visible
   * @returns {Promise<void>}
   */
  async waitForVisible() {
    logger.info(`${this.name} [ACTION]:wait for visible state`);
    return await this.selector.waitFor();
  }
}

