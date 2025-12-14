import type { Node, Props, Element } from "../definitions/index.definition";

export default function h(
  type: string | ((props: any) => Element),
  props: Props,
  ...children: (Node | Node[])[]
): Element {
  return {
    type,
    props: {
      ...props,
      children: children.flat().filter(Boolean),
    },
  };
}
