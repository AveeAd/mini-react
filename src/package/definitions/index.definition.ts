export interface Props extends Record<string, any> {
  className?: string;
}

export interface PropsWithChildren extends Props {
  children: Node[] | Node;
}

export interface Element {
  type: string | ((props: Props) => Element);
  props: PropsWithChildren;
}

export type Node = Element | string | number | boolean | null | undefined;
