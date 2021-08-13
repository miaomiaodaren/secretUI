import type { MutableRefObject } from 'react';
import { useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type baseTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

interface Tprops {
  target: baseTarget;
}

const useSize = ({ target }: Tprops): { width: number; height: number } => {
  const [state, setState] = useState(() => {
    const el = target;
    return {
      width: (el as HTMLElement).clientWidth,
      height: (el as HTMLElement).clientHeight,
    };
  });
  useLayoutEffect(() => {
    if (!target) {
      return () => {};
    }
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setState({
          width: (entry.target as Element)?.clientWidth,
          height: (entry.target as Element)?.clientHeight,
        });
      });
    });
    resizeObserver.observe(target as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);
  return state;
};

export default useSize;
