import useStateHook from "./state/useState";
import renderer from "./renderer";
import h from "./component/h";

export const useState = useStateHook;
export const createRoot = renderer;
export default h;
