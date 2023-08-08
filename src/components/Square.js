import React from 'react'
//destructuring props into keys
const Square = ({square, index, handleGamePlay, currentPlayer}) => {

  const handleClick = () => {
    handleGamePlay(index)
  }
  //dynamically changing className to better fit css styling
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
