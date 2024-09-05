import BaseForm from "../../framework/page/BaseForm";
import { Label } from "../../framework/elements/index.js";

export class SecondCardPage extends BaseForm {
  constructor(page) {
    super(
      new Label(page, '//div[@class="avatar-and-interests__avatar-box"]', 'Unique image for second card page'),
      'Second card page'
    );
  }
}