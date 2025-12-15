import h from "../package/component/h";
import useState from "../package/state/useState";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Click to Increment</button>
    </div>
  )
}
