import { createElement, render } from "./utils";
export const React = (() => {
  let hooks: any[] = [];
  let hookIndex = 0;
  const useState = <T>(initialValue?: T) => {
    const state = hooks?.[hookIndex] || initialValue;
    const _hookIndex = hookIndex;

    const workLoop = () => {
      hookIndex = 0;
      render(hooks)();
      setTimeout(workLoop, 100);
    };
    setTimeout(workLoop, 100);

    const setState = (newVal: T) => {
      hooks[_hookIndex] = newVal;
    };
    hookIndex++;
    return [state, setState] as [T, (v: T) => void];
  };
  const useEffect = (callback: any, dependencyArray?: any) => {
    const oldDependency = hooks[hookIndex];
    let hasChanged = true;
    if (oldDependency) {
      hasChanged = oldDependency.some(
        (val: any, i: number) => !Object.is(val, dependencyArray[i])
      );
    }
    if (hasChanged) callback();
    hooks[hookIndex] = dependencyArray;
    hookIndex++;
  };

  return {
    useState,
    useEffect,
    createElement,
    render: render(hooks),
  };
})();
