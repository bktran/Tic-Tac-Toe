import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(["p1","p2","p1","p2","p1","p2","p1","p2","p1","p2"])

  let i = 0

  const handleGamePlay = (clickedSquareIndex) => {
    let updatedSquares = [...squares]

      if (player[i] === "p1") {
        updatedSquares[clickedSquareIndex]= "❌"
        setSquares = updatedSquares
      }
      i++
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='square-board'>
        {squares.map((square, index)=> {
          return <Square square = {squares} index={index} handleGamePlay={handleGamePlay}/>
        })}
      </div>
    </>
  )
}

export default App