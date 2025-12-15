export interface Props {
  className?: string;
  children?: Node[] | Node;
  [key: string]: any;
}

export interface PropsWithChildren extends Props {
  children: Node[] | Node;
}

export interface Element {
  type: string | ((props: Props) => Element);
  props: Props | PropsWithChildren;
}

export type Node = Element | string | number | boolean | null | undefined;
