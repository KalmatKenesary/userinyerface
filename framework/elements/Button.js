import { logger } from "../utils/Logger.js";
import BaseElement from "./BaseElement.js";
import ElementType from "../constants/ElementType.js";

export class Button extends BaseElement {
    constructor(page, locator, name) {
        super(page, locator, name);
        this.elementType = ElementType.BUTTON;
    }

    /**
     * Perform double click of the button element
     * @returns {Promise<void>}
     */
    async doubleClick() {
        logger.info(`${this.logText()} [ACTION]:double click`);
        return await this._get().dblclick();
    }

    /**
     * Perform right click of the button element
     * @returns {Promise<void>}
     */
    async rightClick() {
        logger.info(`${this.logText()} [ACTION]:right click`);
        return await this._get().click({ button: 'right' });
    }
};