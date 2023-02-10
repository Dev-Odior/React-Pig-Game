import React, { useContext } from 'react'
import './error.css'
import { AppContext } from '../../context/app-context'

const ErrorModal = () => {
  const { error, dispatcher } = useContext(AppContext)
  console.log(error)
  const onClickHandler = () => {
    dispatcher({ type: 'REMOVE_ERROR' })
  }
  return (
    <>
      <div className="error-container" onClick={onClickHandler} />
      <div className="error">
        <h2>You have entered a value more than 9999!!!</h2>
        <button onClick={onClickHandler} type="button" className="error-button">
          Ok
        </button>
      </div>
    </>
  )
}

export default ErrorModal
