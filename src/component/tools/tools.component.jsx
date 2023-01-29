import { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import './tools.styles.css'

const Tools = () => {
  const { diceRollHandler, switchPlayerHandler, reset } = useContext(AppContext)
  return (
    <>
      <button className="btn btn--new" onClick={reset}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={diceRollHandler}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={switchPlayerHandler}>
        📥 Hold
      </button>
    </>
  )
}

export default Tools
