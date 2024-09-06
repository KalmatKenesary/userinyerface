import { logger } from '../utils/Logger.js';

export default class BaseForm {
  constructor(uniqueElement, name) {
    this.uniqueElement = uniqueElement;
    this.name = name;
  }

  /**
   * Get unique element of the page
   * @returns {<T>BaseElement} unique element of the page
   */
  getUniqueElement() {
    return this.uniqueElement;
  }

  /**
   * Get name of the page
   * @returns {string} Name of the page
   */
  getName() {
    return this.name;
  }

  /**
   * Check if the form is opened, with 'pageLoadTime' timeout
   * @returns {Promise<boolean>} true if opened else false
   */
  async isPageOpened() {
    let isVisible = await this.uniqueElement.state().isVisible();
    logger.info(`Page "${this.name}" is opened - "${isVisible}"`);
    return isVisible;
  }
}