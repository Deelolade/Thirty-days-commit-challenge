import React, { useEffect } from 'react'

const Events = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const location = (`Mouse moved at ${event.clientX}, ${event.clientY}`)
        //   console.log(`Mouse moved at ${event.clientX}, ${event.clientY}`);
        console.log(location)
        };
    
        // Adding event listener
        window.addEventListener('mousemove', handleMouseMove);
    
        // Cleanup function to remove event listener when component unmounts or effect runs again
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []); // Runs only once when the component mounts
    
      return <div>Move your mouse and check the console
        {/* <h1>{location}</h1> */}
      </div>;
}

export default Events
