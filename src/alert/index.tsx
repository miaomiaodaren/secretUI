import React, { useState } from 'react';
import { Input } from 'antd';

const prefixCls = 'happy-alert';

interface IProps {
  text?: string;
}

const Alert = ({ text }: IProps) => {
  const [count, setCount] = useState(0);
  const testAlert = () => {
    setCount(count + 1);
  };
  return (
    <div className={prefixCls} onClick={testAlert}>
      test Alert{text}
      <Input value={1} onChange={(e) => console.log(e.target.value)}></Input>
    </div>
  );
};

export default Alert;
