import React, { useEffect, useState } from "react";

export default function UseEffectExercise() {
  
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setTimer((c) => new Date().toLocaleString())
    }, 1000)

    return () => {
        clearInterval(counterInterval)
    }

  }, [])

  return (
    <div style={{display: 'flex', 
    justifyContent: 'center', 
    alignItems:'center',}}>
  <div 
    style={currentTimeStyle}>
      
    Current Time: {timer}
  </div>
  </div>
  )
}

const currentTimeStyle = {
  border: '1px solid blue',
  borderRadius: "5px",
  marginTop: "50px",
  width: "200px",
  
}