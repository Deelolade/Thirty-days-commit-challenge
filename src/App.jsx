import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const counter =()=>{
    setCount(prevCount => prevCount + 1)
  }
  const Reduce =()=>{setCount(prevCount => prevCount >0 ? prevCount -1 : prevCount  )}
  
  const [color, setColor] = useState('red');

  // Function to change the color
  const changeColor = () => {
    if (color ==="red") {
      setColor('blue');
    }
    else setColor("red")
  };
  const [name, setName] =useState("Muhammed");

  const nameChange=()=>{setName(name ==="Muhammed"? "Habeeb": "Muhammed")}



  const [story, setStory] =useState({
    name : "Muhammed",
    age : 9,
    school :"Premier Fountain school", 
    grade: "Brilliance"
  })
  // const changeStory = () => {
  //   setStory(story.name ==="Muhammed" ? "Muhammed" : "Habeeb")
  // }
  return (
    <div>
      <button onClick={counter}>increase</button>
      <button>{count}</button>
      <button onClick={Reduce}>decrease</button>
    
      <div>
      <h1 style={{ backgroundColor: color, color:"white" }}>My favorite color is {color}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
    <h1>My name is {name}</h1>
    <button onClick={nameChange}>change Name</button>

    <h1>My story</h1>
    <p>My name is {story.name}</p>
    <p>I am {story.age} years old</p>
    <p>I study at {story.school}</p>
    <p>My Teacher recommends my {story.grade}</p>
    <button onclick={changeStory}> change story</button>



    </div>
  )
}


// const Reduce =()=>{setCount (prevCount=> prevCount >0 ? prevCount -1 : prevCount)}
export default App
