abstract class Component {
  protected readonly element: Element;

  constructor(
    private readonly paretElement: Element,
    tagName: string,
    className: string,
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public render(): void {
    this.paretElement.appendChild(this.element);

    this.populate();
  }

  protected abstract populate(): void;
}

export default Component;
