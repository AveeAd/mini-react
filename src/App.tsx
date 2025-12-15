import Button from "./components/Button";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import HeadingWrapper from "./components/HeadingWrapper";

export default function App() {
  
  return (
    <div className="container">
      <HeadingWrapper>
        <Heading title="Hello World" />
      </HeadingWrapper>
      <Button />
      <Counter />
    </div>
  )
}
