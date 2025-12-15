type Element = import("./src/package/definitions/index.definition").Element;
type Props = import("./src/package/definitions/index.definition").Props;
declare namespace JSX {
  type Element = Element;

  interface IntrinsicElements {
    [tag: string]: Props;
  }

  interface ElementAttributesProperty {
    props: Props;
  }
}

const h = import("./src/package/component/h");
