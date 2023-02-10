import './player-card.styles.css'

const PlayerCard = ({ player }) => {
  const { id, total, current, activePlayer, winner } = player

  return (
    <div
      className={`player ${activePlayer === 1 ? 'player--active' : ''} ${
        winner ? 'player--winner' : ''
      }`}
    >
      <h2 className={`name ${winner ? 'player-winner-name' : ''}`}>{`player ${id}`}</h2>
      <h2 className="score">{total}</h2>
      <div className="current">
        <p className="current-label">current</p>
        <p className="current-score">{current}</p>
      </div>
    </div>
  )
}

export default PlayerCard
