import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'


const C = () => {
  const word = useContext(AppContext)

  return (
    <div>
      <h3>C</h3>
      <p>{word}</p>
    </div>
  )
}

export default C
