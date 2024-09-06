import { Button, Label, Input, Checkbox } from '../../framework/elements/index.js'
import BaseForm from "../../framework/page/BaseForm.js";
import BaseElement from '../../framework/elements/BaseElement.js';

export class FirstCardPage extends BaseForm {
  constructor(page) {
    super(
      new BaseElement(page, '//div[@class="login-form"]', 'Unique login form of game page'),
      'First card page'
    );
    
    this.fisrtCardPageButton = (buttonClass) => new Button(page, `//a[@class="${buttonClass}"]`, 'First card page button');
    this.firstCardPageLabel = (labelClass) => new Label(page, `//div[@class="${labelClass}"]`, 'First card page label');
    this.inputField = (placeholder) => new Input(page, `//input[@placeholder="${placeholder}"]`, `Input field for ${placeholder}`);
    this.termsAndConditionsCheckbox = new Checkbox(page, '//span[@class="checkbox"]', 'Checkbox for accept Terms and Conditions');
    this.dropDownOpenerButton = new Button(page, '//div[@class="dropdown__opener"]', 'Button for open dropdown');
    this.dropDownItemButton = (item) => new Button(page, `//div[@class="dropdown__list-item" and text()="${item}"]`, 'Button for choose item of dropdown');
  }

  async clickFirstCardPageButton(buttonClass) {
    await this.fisrtCardPageButton(buttonClass).click();
  }

  async firstCardPageLabelIsDisplayed(labelClass) {
    return await this.firstCardPageLabel(labelClass).state().isVisible();
  }

  async getFirstCardPageLabelText(labelClass) {
    return await this.firstCardPageLabel(labelClass).textContent();
  }

  async typeTextInputField(placeholder, text) {
    await this.inputField(placeholder).typeText(text);
  }

  async clickTermsAndConditionsCheckbox() {
    await this.termsAndConditionsCheckbox.click();
  }

  async clickDropDownOpenerButton() {
    await this.dropDownOpenerButton.click();
  }

  async clickDropDownItem(item) {
    await this.dropDownItemButton(item).click();
  }
}