import React, { useEffect, useState } from 'react'
const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
           console.log("running")
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };        
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            
            clearInterval(handleMouseMove)
        }
    }, [])

    return (
        <div>
      <h2>X: {position.x}</h2>
      <h2>Y: {position.y}</h2>
    </div>
    )
}

export default MouseTracker;