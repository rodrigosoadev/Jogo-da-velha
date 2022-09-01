import React from 'react'

const Square = ({value, clickHandler}) => {
    const style = value ? `squares ${value}` : `squares`
  return (
    <button 
    onClick={clickHandler}
    className = {style}>
        {value}
    </button>
  )
}

export default Square
