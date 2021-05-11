import React,{ useState,useEffect } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

function Index(){
  useEffect(()=>{
    console.log('进入');
    return ()=>{
      console.log('离开');
    }
  })
  return <h3>首页</h3>
}
function List(){
  return <h3>列表</h3>
}
export default function Example2() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(count);
  })
  
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>+1</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" exact component={List}></Route>
      </Router>
    </div>
  )
}
