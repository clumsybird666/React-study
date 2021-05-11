import React,{ useRef } from 'react'

export default function Example5() {
  const inputE1 = useRef(null)
  const btnClick = ()=> {
    inputE1.current.value = 'swj'
    console.log(inputE1);
  }
  return (
    <div>
      <input ref={inputE1} type="text"></input>
      <button onClick={btnClick}>点击</button>
    </div>
  )
}
