import { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import ErrorModal from '../error modal/error'
import Input from '../input/input'
import PlayerCard from '../player-card/player-card.component'
import RollingDice from '../rolling-dice/rolling-dice.component'
import Tools from '../tools/tools.component'
import './wrapper.styles.css'

const Wrapper = () => {
  const { profile, agreedScore, showWinScore, showDice } = useContext(AppContext)
  return (
    <div className="main">
      {showDice && <RollingDice />}
      {showWinScore && (
        <div className="score-container">
          <span className="agreed-score">{agreedScore}</span>
        </div>
      )}
      <Tools />
      <Input />
      {profile.map((player) => {
        const { id } = player
        return <PlayerCard {...player} key={id} />
      })}
    </div>
  )
}

export default Wrapper
