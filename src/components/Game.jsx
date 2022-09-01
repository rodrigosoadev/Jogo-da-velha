import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helpers'


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = (index) => {
        const timeInHistory = history.slice(0, stepNumber+1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]

        //if user clicks on occupied cell or game is already won
        if(winner || squares[index]){
            return
        }

        squares[index] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext(step & 2 === 0)
    }

    const renderMoves = () => {
        return history.map((_step, moveIndex) =>{
            const destination = moveIndex ? `Go to Move #${moveIndex}` : `Go to Start`
            return (<li key={moveIndex}>
                <button onClick={() => jumpTo(moveIndex)}>{destination}</button>
            </li>)
        })
    }

  return (
    <>
      <h1>Jogo da velha - com hooks</h1>
      <Board 
      squares = {history[stepNumber]}
      handleClick = {handleClick}/>
      <div className='info-wrapper'>
        <div>
            <h3>History</h3>
            {renderMoves()}
        </div>
        <h3>
            {winner ? `winner: ${winner}` : `Next Player: ${xIsNext}` ? 'X' : 'O'}
        </h3>
      </div>
    </>
  )
}

export default Game
