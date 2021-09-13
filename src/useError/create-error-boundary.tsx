import React from 'react';

export type UseErrorBoundaryWarpper = (
  props: Omit<ErrorBoundaryProps, 'onDidCatch'>,
) => React.ReactElement;

export function createErrorBoundary(onDidCatch: OnDidCatchCallback): UseErrorBoundaryWrapper {
  return function UseErrorBoundaryWrapper(props) {
    return React.createElement(ErrorBoundary, {
      onDidCatch,
      children: props.children,
      render: props.render,
      renderError: props.renderError,
    });
  };
}
