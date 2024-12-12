import React, { useEffect, useRef, useState } from 'react'

const Intervals = () => {

    const [count, setCount] = useState(10)
    const [inputValue, setInputValue] = useState('')
    const [showed,setShowed] =useState('')
    const alertShown = useRef(false)  // Track if alert has been shown

    const handleChange =(e)=>{
        setInputValue(e.target.value)
    }
    const handleClick = ()=>{
        setShowed(inputValue)
    }
    useEffect(() => {
        const alertInterval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 1 && !alertShown.current) {
                    alert('Countdown has ended');
                    alertShown.current = true; // Set ref to true after alert
                }
    
                if (prevCount <= 0) {
                    clearInterval(alertInterval); // Clear interval after reaching 0
                    return 0; // Keep count at 0
                }
    
                return prevCount - 1; // Decrement the count
            });
        }, 1000);
    
        return () => clearInterval(alertInterval); // Cleanup interval when component unmounts
    }, []);
    

    return (
        <div>
            <p>Alert count: {count}</p>
            <input type="text"
            onChange={handleChange}
            value ={inputValue}
            />
            <button onClick={handleClick}>click</button>
            <p>{showed}</p>
        </div>
    )
}

export default Intervals
