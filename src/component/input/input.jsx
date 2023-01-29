import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/app-context'
import './input.css'

const Input = () => {
  const { setAgreedScore, setError, setErrorState, setShowWinScore } = useContext(AppContext)
  const [score, setScore] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (score > 9999) {
      console.log(score, 'was returned')
      setError('You Have inputed a value more then 9999')
      setErrorState(true)
      setScore('')

      return
    } else if (score.trim() <= 0) {
      console.log('you have not inputed a valid number')
      setError('you have not inputed a valid number')
      setErrorState(true)
      return
    }
    setAgreedScore(score)
    setShowWinScore(true)
    setScore('')
  }

  const onChangeHandler = (event) => {
    setScore(event.target.value)
  }

  return (
    <>
      <form className="group" onSubmit={onSubmitHandler}>
        <div className="input-style">
          <input
            type="number"
            className="form-input"
            onChange={onChangeHandler}
            value={score}
            placeholder="Enter Score"
          />
          <button className="input-button">Set</button>
        </div>
      </form>
    </>
  )
}

export default Input
