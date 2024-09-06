import BaseForm from "../../framework/page/BaseForm";
import BaseElement from "../../framework/elements/BaseElement.js";

export class SecondCardPage extends BaseForm {
  constructor(page) {
    super(
      new BaseElement(page, '//div[@class="avatar-and-interests__avatar-box"]', 'Unique image for second card page'),
      'Second card page'
    );
  }
}