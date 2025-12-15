import h from "../package/component/h";
import useState from "../package/state/useState";

export default function Button() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const increment =() => {
        setCount(count + 1);
        setCount2(count2 + 1);
      }
 
  return <button onClick={increment}>Click Me {count} {count2}</button>
}
