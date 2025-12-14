import type { Element } from "../definitions/index.definition";
import { initializeRenderer } from "../state/useState";

export default function renderer(element: Element, id: string) {
  const container = document.getElementById(id);
  if (!container) {
    console.error("Container not found!");
    return;
  }
  initializeRenderer(element, container);
}
