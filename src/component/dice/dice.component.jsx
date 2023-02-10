import './dice.styles.css'
import { dice } from '../../data/data'
import { useContext } from 'react'
import { AppContext } from '../../context/app-context'

const Dice = ({ diceValue }) => {
  return (
    <>
      {dice
        .filter((dice) => {
          const { id } = dice
          return id === diceValue
        })
        .map((each) => {
          const { number, id } = each
          return <img className="dice" key={id} src={number}></img>
        })}
    </>
  )
}

export default Dice
