import React, { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
        <div>{counter}</div>
        <button onClick={()=>setCounter(prev => prev+1)}>+</button>
    </>
  )
}
