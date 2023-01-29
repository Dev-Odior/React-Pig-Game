import './dice.styles.css'

import dice1 from '../../images/dice-1.png'
import dice2 from '../../images/dice-2.png'
import dice3 from '../../images/dice-3.png'
import dice4 from '../../images/dice-4.png'
import dice5 from '../../images/dice-5.png'
import dice6 from '../../images/dice-6.png'

const Dice = ({ data }) => {
  const { id, value } = data

  const dice = [
    { id: 1, value: dice1 },
    { id: 2, value: dice2 },
    { id: 3, value: dice3 },
    { id: 4, value: dice4 },
    { id: 5, value: dice5 },
    { id: 6, value: dice6 },
  ]
  return (
    <>
      {dice
        .filter((each) => each.id === value)
        .map((each) => {
          const { value } = each
          return <img src={value} className="dice" key={each.id} />
        })}
    </>
  )
}

export default Dice
