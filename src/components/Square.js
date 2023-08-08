import React from 'react'

const Square = ({square, index, handleGamePlay, currentPlayer}) => {

  const handleClick = () => {
    handleGamePlay(index)
  }

  let squareClass = "square"
  if (currentPlayer === "p1") {
    squareClass += " p1"
  } else if(currentPlayer === "p2"){
    squareClass += " p2"
  }
  
  return (
    <>
    <div className={squareClass} onClick={handleClick}>
      {square} 
    </div>
    </>
  )
}
export default Square
