import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/app-context'
import './input.css'

const Input = () => {
  const { dispatcher } = useContext(AppContext)
  const [input, setInput] = useState('')

  const onChangeHandler = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatcher({ type: 'AGREED_SCORE', payLoad: input })
    setInput('')
  }

  return (
    <>
      <form className="group" onSubmit={onSubmitHandler}>
        <div className="input-style">
          <input
            type="number"
            className="form-input"
            placeholder="Enter Score"
            onChange={onChangeHandler}
            value={input}
          />
          <button className="input-button">Set</button>
        </div>
      </form>
    </>
  )
}

export default Input
