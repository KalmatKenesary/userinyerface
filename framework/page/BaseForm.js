

export default class BaseForm {
  constructor(uniqueElement, name) {
    this.uniqueElement = uniqueElement;
    this.name = name;
  }

  async isPageOpened() {
    let isVisible = this.uniqueElement.state().isVisible();
    return isVisible;
  }
}