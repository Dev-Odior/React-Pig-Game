import Dice from '../dice/dice.component'
import './rolling-dice.styles.css'
import { defaultDices } from '../../data/data'
import { useContext } from 'react'
import { AppContext } from '../../context/app-context'

const RollingDice = () => {
  const { diceOne, diceTwo } = useContext(AppContext)
  let values

  return (
    <div className="dicies">
      {defaultDices.map((each) => {
        each.id === 1 ? (values = diceOne) : (values = diceTwo)
        return <Dice key={each.id} diceValue={values} />
      })}
    </div>
  )
}

export default RollingDice
