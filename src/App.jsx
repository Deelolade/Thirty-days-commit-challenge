import React, { useEffect, useState } from 'react'
import UseEffects from './components/UseEffects'
import Catfacts from './components/Catfacts'
import Events from './components/Events'
import Axios from './components/Axios'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient ({
  defaultOptions : {
    refetchWindowsFocus : false
  }
}) 
const App = () => {
  const [count, setCount] = useState(0)
  const counter = () => {
    setCount(prev => {
      if (prev === 20) {
        alert(`counter is already set to ${count}`)
      }
      return prev + 1
    })
  }
  const Reduce = () => { setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount) }
  const [color, setColor] = useState('red');
  const changeColor = () => {
    // setColor(prevColor => prevColor ==="red" ? "blue" : "red")
    if (color === "red") {
      setColor("blue")
    }
    else if (color === "blue") {
      setColor("green")
    }
    else setColor("red")
  };
  const [name, setName] = useState("Muhammed");
  const nameChange = () => { setName(name === "Muhammed" ? "Habeeb" : "Muhammed") }
  const [cover, setCover] = useState(false)
  return (
    <QueryClientProvider client={client}>
    <div>
      {/* <UseEffects /> */}
      {/* <Catfacts/> */}
      {/* <Events /> */}
      <Axios/>
      <button onClick={counter}>increase</button>
      <button>{count}</button>
      <button onClick={Reduce}>decrease</button>
      <div>
        <h1 style={{ backgroundColor: color, color: "white" }}>My favorite color is {color}</h1>
        <button onClick={() => setColor(prev => prev === "red" ? "blue" : "red")}>Change Color</button>
      </div>
      <h1>My name is {name}</h1>
      <button onClick={nameChange}>change Name</button>
      {cover && <h1 className='heading animated'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi.</h1>}
      {cover ? <p>hello world </p> : <p>hello there</p>}
      {cover ? <p>hello world</p> : null}
      <button onClick={() => setCover(prev => !prev)}>{cover ? "Hide" : "Display"} Text</button>
    </div>
    </QueryClientProvider>
  )
}


export default App
