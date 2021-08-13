import React from 'react';
import UseSize from '../';

export default () => {
  const dom = document.querySelector('body');
  const { width, height } = UseSize({ target: dom })
  return (<div>
    <span>宽: {width}</span>
    <span>高: { height }</span>
  </div>)
};