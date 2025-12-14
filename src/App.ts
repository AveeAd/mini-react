import Button from "./components/Button";
import Heading from "./components/Heading";
import HeadingWrapper from "./components/HeadingWrapper";
import h from "./package/component/h";

export default function App() {
  return h(
    "div",
    { className: "container" },
    h(HeadingWrapper, {}, h(Heading, { title: "Hello World" })),
    h(Button, {})
  );
}
