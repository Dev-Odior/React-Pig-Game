import { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import Dice from '../dice/dice.component'
import './rolling-dice.styles.css'

const RollingDice = () => {
  const { dices } = useContext(AppContext)
  return (
    <div className="dicies">
      {dices.map((each) => (
        <Dice key={each.id} data={each} />
      ))}
    </div>
  )
}

export default RollingDice
