import { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import './tools.styles.css'

const Tools = () => {
  const { dispatcher } = useContext(AppContext)

  const rollDiceHandler = () => {
    dispatcher({ type: 'ROLL_DICE' })
  }

  const holdHandler = () => {
    dispatcher({ type: 'HOLD' })
  }

  const newGameHandler = () => {
    dispatcher({ type: 'NEW_GAME' })
  }
  return (
    <>
      <button className="btn btn--new" onClick={newGameHandler}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={rollDiceHandler}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={holdHandler}>
        📥 Hold
      </button>
    </>
  )
}

export default Tools
