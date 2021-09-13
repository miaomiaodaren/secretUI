import React, { useReducer, useRef } from 'react';

export interface ErrorState {
  didCatch: boolean;
  error: any | null;
}

interface StateAction {
  type: 'catch' | 'reset';
  error?: any | null;
}

type IUseErrorBoundaryReducer = (state: ErrorState, action: StateAction) => ErrorState;

const useErrorBoundaryReducer: IUseErrorBoundaryReducer = (state, action) => {
  switch (action.type) {
    case 'catch':
      return {
        didCatch: true,
        error: action.error,
      };
    case 'reset':
      return {
        didCatch: false,
        error: null,
      };
    default:
      return state;
  }
};

const useError = () => {
  const [state, dispatch] = useReducer<IUseErrorBoundaryReducer>(useErrorBoundaryReducer, {
    didCatch: false,
    error: null,
  });
  const errorBoundaryWrapperRef = useRef<UseErrorBoundaryWrapper | null>(null);
  function getWrappedErrorBoundary() {
    const errorBoundaryWrapper = errorBoundaryWrapperRef.current;
    if (errorBoundaryWrapper !== null) {
      return errorBoundaryWrapper;
    }
    errorBoundaryWrapperRef.current = createWrappedErrorBoundary();
    return errorBoundaryWrapperRef.current;
  }
  return <div>2222</div>;
};

export default useError;
