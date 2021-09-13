import type React from 'react';
interface IProps<T = any> {
    list: T[];
    options: {
        itemHeight: number | ((index: number) => number);
        overscan?: number;
    };
}
declare const UseVirtualList: (list: IProps['list'], options: IProps['options']) => {
    list: {
        data: any;
        index: number;
    }[];
    containerProps: {
        ref: (ele: any) => void;
        onScroll: (e: React.ChangeEvent<HTMLInputElement>) => void;
        style: {
            overflowY: string;
        };
    };
    scrollTo: (index: number) => void;
    wrapperProps: {
        style: {
            width: string;
            height: number;
            marginTop: any;
        };
    };
};
export default UseVirtualList;
