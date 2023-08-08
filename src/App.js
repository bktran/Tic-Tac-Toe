import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("p1")
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
    // this stops the gameplay from players continuing to play after a win
    if (winner) {
      return
    }
    // updates the square after a click
    let updatedSquares = [...squares]
    if (updatedSquares[clickedSquareIndex] === null) {
      if (player === "p1") {
        updatedSquares[clickedSquareIndex]= "🐮"
        setPlayer("p2")
      }
      else if (player === "p2") {
        updatedSquares[clickedSquareIndex]= "🐔"
        setPlayer("p1")
      }
      setSquares(updatedSquares)
      const theWinner = calculateWinner(updatedSquares)
      setWinner(theWinner)
      console.log(theWinner)
    }
  }
    // displays messages based on conditions above
  const renderMessage = () => {
    // if winner exists
    if (winner) {
      return <h1 className="winner">{winner} Wins ! <br></br> Game Over 🐷☠️</h1> 
    } //iterate over squares array and check for null values
    else if (squares.every(value => value !== null)) {
      return <h1 className="tie">No Winners Today !<br></br> Game Over 🐷☠️</h1>
    }
    else {
      return <h1>The Winner Is ....</h1>
    }
  }
  // display player's turn
  const displayTurn = () => {
    if (player === "p1") {
      return <h1>🐮's turn!</h1>
    }
    else if (player === "p2") {
      return <h1>🐔's turn!</h1>
    }
  }

  //resetting all states
  const restartButton = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setPlayer("p1")
  }
  return (
    <>
    <body>
      <h1 className='title'>Tic Tac BBQ</h1>
      <div className='square-board'>
        {squares.map((square, index)=> {
          return (<Square 
            square={square} 
            index={index} 
            key={index}
            handleGamePlay={handleGamePlay}
            currentPlayer ={player}/>)
        })}
      </div>

      <div className='winnertitle'>
        {renderMessage()}
      </div>

      <div className="buttonContainer">
      <button className="button" onClick={restartButton}>Restart</button>
      {displayTurn()}
      </div>
    </body>
    <footer className="footer">Created By: Bao, Kiana, & Megan</footer>
    </>
  )
}

export default App