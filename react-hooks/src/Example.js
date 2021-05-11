import React,{ useState } from 'react'

export default function Example() {
  const [name, setName] = useState('swj')
  return (
    <div>
      {name}
      <button onClick={()=>setName('yxs')}>改变</button>
    </div>
  )
}
