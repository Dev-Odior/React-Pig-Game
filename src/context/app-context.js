import { createContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer/reducer'

import { random, defaultDices, defaultProfile, defaultState, check } from '../data/data'

export const AppContext = createContext({
  dispatcher: () => null,
  agreedScore: 0,
  state: {},
  showDice: null,
  diceValues: null,
  profile: [],
  error: null,
})

export const AppContextProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, defaultState)

  const { diceOne, showDice, diceTwo, profile, check, agreedScore, error } = state

  useEffect(() => {
    if (diceOne === 6 && diceTwo === 6) {
      dispatcher({ type: 'HOLD', payLoad: 'SKIP_TOTAL' })
    }
    if (diceOne === 1 && diceTwo === 1) {
      dispatcher({ type: 'HOLD', payLoad: 'REMOVE_SCORE' })
    }
  }, [diceOne, diceTwo])

  useEffect(() => {
    let score = 100
    if (agreedScore > 0) {
      score = agreedScore
    }
    const TotalCheck = () =>
      profile.map((player) => {
        if (player.total >= score) {
          dispatcher({ type: 'WINNER', payLoad: player.id })
        }
      })
    if (check) {
      TotalCheck()
    }
  }, [profile])

  useEffect(() => {
    if (error) {
      dispatcher({ type: 'ERROR', payLoad: 'You have entered a value greater than 9999' })
    }
  }, [error])

  const value = {
    showDice,
    dispatcher,
    agreedScore,
    diceOne,
    diceTwo,
    profile,
    error,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
