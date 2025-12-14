import createElementNode from "../component/createElementNode";
import render from "../component/render";
import type { Element } from "../definitions/index.definition";

let appElement: Element;
let appContainer: HTMLElement;
let componentStateIndex = 0;
let componentState: Map<number, { value: any; setValue: (v: any) => void }> =
  new Map();

function scheduleRender() {
  if (!appElement || !appContainer) {
    console.error("Renderer not initialized!");
    return;
  }
  componentStateIndex = 0;
  render(appElement, appContainer);
  appContainer.replaceChildren(createElementNode(appElement));
}

export function initializeRenderer(element: Element, container: HTMLElement) {
  appElement = element;
  appContainer = container;
  scheduleRender();
}

export default function useState<T>(initialState: T) {
  const state = componentState.get(componentStateIndex);
  if (state) {
    componentStateIndex++;
    return [state.value, state.setValue];
  } else {
    const newState = {
      value: initialState,
      setValue: (v: T) => {
        newState.value = v;
        scheduleRender();
      },
    };
    componentState.set(componentStateIndex, newState);
    componentStateIndex++;
    return [newState.value, newState.setValue];
  }
}
