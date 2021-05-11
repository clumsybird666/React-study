import React,{createContext,useContext,useState} from 'react'

const CountContext = createContext()

function Counter(){
  let count = useContext(CountContext)
  return <h1>{count}</h1>
}

export default function Example3() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+++++++</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}
