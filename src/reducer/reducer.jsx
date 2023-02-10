import { random, defaultState } from '../data/data'

export const reducer = (state, action) => {
  const { type, payLoad } = action
  const { diceSum, profile, gamePlaying } = state

  if (type === 'NEW_GAME') {
    return { ...defaultState }
  }

  if (gamePlaying) {
    if (type === 'AGREED_SCORE') {
      if (payLoad > 9999) {
        return { ...state, error: true }
      }
      return { ...state, agreedScore: payLoad }
    }

    if (type === 'ROLL_DICE') {
      const firstDice = random()
      const secondDice = random()
      const sum = firstDice + secondDice

      const getScores = profile.map((player) => {
        const { activePlayer, current } = player
        return activePlayer === 1 ? { ...player, current: current + sum } : { ...player }
      })

      return {
        ...state,
        diceOne: firstDice,
        diceTwo: secondDice,
        diceSum: diceSum + sum,
        profile: getScores,
      }
    }

    if (type === 'HOLD') {
      const activeChange = profile.map((player) => {
        const { activePlayer, total, current } = player
        let currentHolder = current
        let totalHolder = total

        if (payLoad === 'SKIP_TOTAL') {
          currentHolder = 0
        }

        if (payLoad === 'REMOVE_SCORE') {
          totalHolder = 0
          currentHolder = 0
        }

        return activePlayer === 1
          ? { ...player, activePlayer: 2, total: totalHolder + currentHolder, current: 0 }
          : { ...player, activePlayer: 1 }
      })

      return { ...state, profile: activeChange }
    }

    if (type === 'ERROR') {
      return { ...state }
    }

    if (type === 'REMOVE_ERROR') {
      return { ...state, error: false }
    }

    if (type === 'WINNER') {
      const setWinner = profile.map((player) =>
        player.id === payLoad ? { ...player, winner: true } : { ...player, activePlayer: 2 }
      )
      return { ...state, profile: setWinner, check: false, gamePlaying: false }
    }
  }
  return { ...state }
}
