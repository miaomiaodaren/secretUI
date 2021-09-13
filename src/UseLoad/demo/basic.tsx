import React, { useState } from 'react';
import UseLoad from '../';
import '../style';

export default () => {
  const [status, setStatus] = useState(false);
  const taggleLoad = () => setStatus(!status);
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={taggleLoad}>{status ? 'close' : 'open'}</button>
      <UseLoad visible={status}>大家好我是喵喵大人</UseLoad>
    </div>
  );
};
