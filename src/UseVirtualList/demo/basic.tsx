import React from 'react';
import UseVirtualList from '../';
import '../style';

export default () => {
  const { list, containerProps, wrapperProps } = UseVirtualList(Array.from(Array(99999).keys()), {
    overscan: 5,
    itemHeight: 60,
  });
  return (
    <div {...containerProps} style={{ height: '500px', overflow: 'auto' }}>
      <div {...wrapperProps}>
        {list.map((ele) => (
          <div
            style={{
              height: 52,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e8e8e8',
              marginBottom: 8,
            }}
            key={ele.index}
          >
            Row: {ele.data}
          </div>
        ))}
      </div>
    </div>
  );
};
