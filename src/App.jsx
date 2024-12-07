import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const counter =()=>{
    setCount(prevCount => prevCount + 1)
  }
  const Reduce =()=>{setCount(prevCount => prevCount >0 ? prevCount -1 : prevCount  )}
  
  return (
    <div>
      <button onClick={counter}>increase</button>
      <button>{count}</button>
      <button onClick={Reduce}>decrease</button>
    
    </div>
  )
}

// const Reduce =()=>{setCount (prevCount=> prevCount >0 ? prevCount -1 : prevCount)}
export default App
