import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("p1")


  const handleGamePlay = (clickedSquareIndex) => {
    let updatedSquares = [...squares]
    if (updatedSquares[clickedSquareIndex] === null) {
      if (player === "p1") {
        updatedSquares[clickedSquareIndex]= "❌"
        setSquares(updatedSquares)
        setPlayer("p2")
      }
      if (player === "p2") {
        updatedSquares[clickedSquareIndex]= "🅾️"
        setSquares(updatedSquares)
        setPlayer("p1")
      }
    }
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='square-board'>
        {squares.map((square, index)=> {
          return (<Square 
            square={square} 
            index={index} 
            key={index}
            handleGamePlay={handleGamePlay}/>)
        })}
      </div>
    </>
  )
}

export default App