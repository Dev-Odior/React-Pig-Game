import { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import ErrorModal from '../error modal/error'
import Input from '../input/input'
import PlayerCard from '../player-card/player-card.component'
import RollingDice from '../rolling-dice/rolling-dice.component'
import Tools from '../tools/tools.component'
import './wrapper.styles.css'

const Wrapper = () => {
  const { showDice, profile, agreedScore, error } = useContext(AppContext)
  console.log(agreedScore)
  return (
    <div className="main">
      {error && <ErrorModal />}

      {showDice && <RollingDice />}
      {profile.map((player) => {
        return <PlayerCard key={player.id} player={player} />
      })}

      {agreedScore > 0 && (
        <div className="score-container">
          <span className="agreed-score">{agreedScore}</span>
        </div>
      )}

      <Tools />
      <Input />
    </div>
  )
}

export default Wrapper
