import React,{ useReducer } from 'react'

export default function Example4() {
  const [count,dispatch] = useReducer((state,action)=>{
    switch (action.type) {
      case 'add':
        return state+1
    case 'sub':
      return state-1
      default:
        return state
    }
  },0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>{dispatch({type:'add'})}}>+</button>
      <button onClick={()=>{dispatch({type:'sub'})}}>-</button>
    </div>
  )
}
