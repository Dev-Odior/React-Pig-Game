import './player-card.styles.css'

const PlayerCard = ({ id, total, current, activePlayer, winner }) => {
  return (
    <div
      className={`player ${activePlayer === 1 ? 'player--active' : ''} ${
        winner ? 'player--winner' : ''
      }`}
    >
      <h2 className={`name ${winner ? 'player-winner-name' : ''}`}>{` ${
        winner ? 'Winner' : `player ${id}`
      }`}</h2>
      <h2 className="score">{total}</h2>
      <div className="current">
        <p className="current-label">current</p>
        <p className="current-score">{current}</p>
      </div>
    </div>
  )
}

export default PlayerCard
