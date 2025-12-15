import h from "../package";
import type { Props } from "../package/definitions/index.definition";

export default function HeadingWrapper({ children }: Props) {
  return <div className="heading-wrapper">{children}</div>
}
