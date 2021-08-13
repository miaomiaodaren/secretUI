import React, { useState } from "react"

const prefixCls = 'happy-alert';

interface IProps {
  text?: string
}

const Alert = ({ text }: IProps) => {
  const [count, setCount] = useState(0)
  const testAlert = () => {
    setCount(count + 1)
  }
  return <div className={prefixCls} onClick={testAlert}>test Alert{ text }</div>
}

export default Alert