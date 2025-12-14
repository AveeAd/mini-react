import h from "../package/component/h";

export default function Heading({ title }: { title: string }) {
  return h("h1", { style: "color: red;" }, title);
}
