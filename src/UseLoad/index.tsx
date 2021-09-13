import type { FC, ReactElement } from 'react';
import React from 'react';

const prefixCls = 'useLoad';

interface IProps {
  message?: string | ReactElement;
  visible?: boolean;
}

const UseForm: FC<IProps> = ({ children, message, visible = false }) => {
  if (!visible) return null;
  return (
    <div className={prefixCls}>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {message && <p className="loading-msg">{message}</p>}
      <div className="loading-content">{children}</div>
    </div>
  );
};

export default UseForm;
