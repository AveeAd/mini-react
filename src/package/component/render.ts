import createElementNode from "./createElementNode";
import type { Element } from "../definitions/index.definition";

export default function render(element: Element, container: HTMLElement) {
  const app = createElementNode(element);
  container.replaceChildren(app);
}
