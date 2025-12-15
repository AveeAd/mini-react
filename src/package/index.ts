import useStateHook from "./state/useState";
import renderer from "./renderer";

export const useState = useStateHook;
export const createRoot = renderer;
