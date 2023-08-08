import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("p1")
  // const [playerOneHistory, setPlayerOneHistory] = useState([])
  // const [playerTwoHistory, setPlayerTwoHistory] = useState([])
  const [winner, setWinner] = useState(null)
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }  


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
      const theWinner = calculateWinner(updatedSquares)
      setWinner(theWinner)
      console.log(theWinner)
    }
  }

  const renderMessage = () => {
    if (winner) {
      return <h1>{winner} Wins !</h1>
    }
    else if (squares.every(value => value !== null)) {
      return <h1>No Winners Today !</h1>
    }
    else {
      return <h1>The Winner Is ....</h1>
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

      <div className='winnertitle'>
        {renderMessage()}
      </div>
    </>
  )
}

export default App