import h from "../package/component/h";
import type { PropsWithChildren } from "../package/definitions/index.definition";

export default function HeadingWrapper({ children }: PropsWithChildren) {
  return h("div", { className: "heading-wrapper" }, children);
}
