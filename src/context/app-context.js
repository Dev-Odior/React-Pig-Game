import { createContext, useEffect, useState } from 'react'

const defaultProfile = [
  {
    id: 1,
    total: 0,
    current: 0,
    activePlayer: 1,
  },
  {
    id: 2,
    total: 0,
    current: 0,
    activePlayer: 2,
  },
]

const defaultDices = [
  { id: 1, value: 2 },
  { id: 2, value: 6 },
]

const random = () => {
  return Math.floor(Math.random() * 6 + 1)
}

export const AppContext = createContext({
  dices: [],
  profile: [],
  setProfile: () => null,
  switchPlayerHandler: () => null,
  showDice: true,
  setShowDice: () => {},
  showWinScore: false,
  setShowWinScore: () => {},

  setDiceOne: () => null,
  setDiceTwo: () => null,
  diceOne: null,
  diceTwo: null,
  setDiceTotal: () => null,
  setDices: () => null,
  diceTotal: null,
  diceRollHandler: () => null,

  reset: () => null,
  won: null,
  setWon: () => null,
  agreedScore: 0,
  setAgreedScore: () => null,
  error: '',
  setError: () => null,
  errorState: null,
  setErrorState: () => null,
})

export const AppContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(defaultProfile)
  const [dices, setDices] = useState(defaultDices)
  const [diceOne, setDiceOne] = useState(0)
  const [diceTwo, setDiceTwo] = useState(0)
  const [diceTotal, setDiceTotal] = useState(0)
  const [initialize, setInitialize] = useState(true)
  const [won, setWon] = useState(false)
  const [agreedScore, setAgreedScore] = useState(0)
  const [error, setError] = useState('')
  const [errorState, setErrorState] = useState(false)
  const [showDice, setShowDice] = useState(false)
  const [showWinScore, setShowWinScore] = useState(false)

  useEffect(() => {
    if (initialize) {
      setInitialize(false)
      return
    }
    setDices((prev) =>
      prev.map((each) => {
        if (each.id === 1) {
          return { ...each, value: diceOne }
        } else if (each.id === 2) {
          return { ...each, value: diceTwo }
        }
      })
    )
    setShowDice(true)
    let addition = diceOne + diceTwo
    setDiceTotal((prev) => prev + addition)
  }, [diceOne, diceTwo])

  useEffect(() => {
    if (initialize) {
      setInitialize(false)
      return
    }
    setProfile((prev) =>
      prev.map((each) => (each.activePlayer === 1 ? { ...each, current: diceTotal } : { ...each }))
    )
  }, [diceTotal])

  const diceRoll = () => {
    setDiceOne(random)
    setDiceTwo(random)
  }

  const diceRollHandler = () => {
    if (won === true) {
      return
    }
    if (diceOne !== 6 || diceTwo !== 6) {
      diceRoll()
    } else {
      switchPlayerHandler()
    }
  }

  useEffect(() => {
    if (initialize) {
      setInitialize(false)
      return
    }

    if (diceOne === 6 && diceTwo === 6) {
      setDiceTotal(0)
    }
  }, [diceTotal])

  const totalHandler = () => {
    setProfile((prev) =>
      prev.map((each) =>
        each.activePlayer === 1
          ? { ...each, activePlayer: 2, current: 0, total: each.total + diceTotal }
          : { ...each, activePlayer: 1 }
      )
    )
    setDiceOne(0)
    setDiceTwo(0)
    setDiceTotal(0)
  }

  useEffect(() => {
    if (initialize) {
      setInitialize(false)
      return
    }

    let winningScore = 100

    if (agreedScore > 0) {
      winningScore = agreedScore
    }

    setProfile((prev) =>
      prev.map((each) => {
        if (each.total >= winningScore) {
          setWon(true)
          return { ...each, winner: true }
        } else {
          return { ...each }
        }
      })
    )
  }, [diceTotal])

  const switchPlayerHandler = () => {
    if (won === true) {
      return
    }
    totalHandler()
  }

  const reset = () => {
    setProfile(defaultProfile)
    setDiceOne(0)
    setDiceTwo(0)
    setDiceTotal(0)
    setWon(false)
    setAgreedScore(0)
  }

  const value = {
    profile,
    dices,
    diceRollHandler,
    switchPlayerHandler,
    reset,
    agreedScore,
    setAgreedScore,
    error,
    setError,
    setErrorState,
    errorState,
    showDice,
    setShowDice,
    showWinScore,
    setShowWinScore,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
