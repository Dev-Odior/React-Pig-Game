import React, { useContext } from 'react'
import './error.css'
import { AppContext } from '../../context/app-context'

const ErrorModal = () => {
  const { error, setErrorState } = useContext(AppContext)
  const onClickHandler = () => {
    setErrorState(false)
  }
  return (
    <>
      <div className="error-container" onClick={onClickHandler} />
      <div className="error">
        <h2>{`${error}!!!`}</h2>
        <button type="button" className="error-button" onClick={onClickHandler}>
          Ok
        </button>
      </div>
    </>
  )
}

export default ErrorModal
