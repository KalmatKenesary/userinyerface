
export default class ElementStateProvider {
  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
  }

  async isVisible() {
    let result = await this.selector.isVisible();
    return result;
  }

  async waitForVisible() {
    await this.selector.waitFor();
  }

  async waitForAttached() {
    await this.selector.waitFor('attached');
  }

  async waitForDetached() {
    await this.selector.waitFor('detached');
  }

  async waitForHidden() {
    await this.selector.waitFor('hidden');
  }
}

