type CustomElement =
  import("./src/package/definitions/index.definition").Element;
type CustomProps = import("./src/package/definitions/index.definition").Props;
declare namespace JSX {
  type Element = CustomElement;

  interface IntrinsicElements {
    [tag: string]: CustomProps;
  }

  interface ElementAttributesProperty {
    props: CustomProps;
  }
}

declare module "*.css" {
  // We can leave this empty for simple side-effect imports,
  // or define a simple type if you were using CSS Modules.
  const content: {}; // Or 'any', but {} is safer for side-effect imports
  export default content;
}
