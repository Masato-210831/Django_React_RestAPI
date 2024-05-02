import React, { useState } from 'react'
import Timer from './Timer'


const TimerContainer = () => {

  const[display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={(() => setDisplay(prev => !prev))}>Swtch Timer</button>
      {display && <Timer/>}
    </div>
  )
}

export default TimerContainer
