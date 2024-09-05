import BaseElement from "./BaseElement.js";

export class Button extends BaseElement {
    constructor(page, locator, name) {
        super(page, locator, name);
    }

    async doubleClick() {
        await this._get().dblclick();
    }

    async rightClick() {
        await this._get().click({ button: 'right' });
    }
};