import dice1 from '../images/dice-1.png'
import dice2 from '../images/dice-2.png'
import dice3 from '../images/dice-3.png'
import dice4 from '../images/dice-4.png'
import dice5 from '../images/dice-5.png'
import dice6 from '../images/dice-6.png'

export const defaultProfile = [
  {
    id: 1,
    total: 0,
    current: 0,
    activePlayer: 1,
    winner: false,
  },
  {
    id: 2,
    total: 0,
    current: 0,
    activePlayer: 2,
    winner: false,
  },
]

export const defaultDices = [
  { id: 1, value: 2 },
  { id: 2, value: 6 },
]

export const defaultState = {
  showDice: true,
  diceOne: 0,
  diceTwo: 0,
  diceSum: 0,
  profile: defaultProfile,
  check: true,
  gamePlaying: true,
  agreedScore: 0,
  error: false,
}

export const random = () => {
  return Math.floor(Math.random() * 6 + 1)
}

export const dice = [
  { id: 1, number: dice1 },
  { id: 2, number: dice2 },
  { id: 3, number: dice3 },
  { id: 4, number: dice4 },
  { id: 5, number: dice5 },
  { id: 6, number: dice6 },
]
