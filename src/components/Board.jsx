import React from 'react'
import Square from './Square'

const Board = ({squares, handleClick}) => {
  return (
    <div className='board'>
      {squares.map((square, index) => {
        return <Square 
        key={index} 
        value={square}
        clickHandler = {() => handleClick(index)}/>
      })}
    </div>
  )
}

export default Board
