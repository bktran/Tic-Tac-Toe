import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))



  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='square-board'>
        {squares.map((square, index)=> {
          return <Square />
        })}
      </div>
    </>
  )
}

export default App