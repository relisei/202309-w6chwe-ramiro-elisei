import App from "./App.js";

describe("Given App component", () => {
  describe("When it receive the body parentElement", () => {
    test("Then it should appendChild div with the class container", () => {
      const parentElement = document.querySelector("body")!;
      const className = "container";
      const createNode = new App(parentElement);
      createNode.render();

      const containerElement = parentElement.querySelector("div");

      expect(createNode).not.toBeNull();
      expect(containerElement?.className).toBe(className);
    });
  });
});
