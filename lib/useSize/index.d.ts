import type { MutableRefObject } from 'react';
declare type baseTarget<T = HTMLElement> = (() => T | null) | T | null | MutableRefObject<T | null | undefined>;
interface Tprops {
    target: baseTarget;
}
declare const useSize: ({ target }: Tprops) => {
    width: number;
    height: number;
};
export default useSize;
