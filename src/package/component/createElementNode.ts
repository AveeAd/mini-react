import type { Element, Node } from "../definitions/index.definition";

export default function createElementNode(element: Element) {
  if (typeof element.type === "function") {
    return createElementNode(element.type(element.props));
  }
  const node = document.createElement(element.type);
  for (const key in element.props) {
    if (key === "children") {
      const children = Array.isArray(element.props.children)
        ? element.props.children
        : [element.props.children];
      children.forEach((child: Node) => {
        if (child) {
          if (["string", "number", "boolean"].includes(typeof child)) {
            node.appendChild(document.createTextNode(child as string));
          } else {
            node.appendChild(createElementNode(child as Element));
          }
        }
      });
    } else {
      if (key.startsWith("on")) {
        node.addEventListener(
          key.slice(2).toLowerCase(),
          element.props[key] as EventListener
        );
      } else {
        (node as any)[key] = element.props[key];
      }
    }
  }

  return node;
}
