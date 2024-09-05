
export default class ElementStateProvider {
  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
  }

  async isVisible() {
    let result = await this.selector.isVisible();
    return result;
  }
}

