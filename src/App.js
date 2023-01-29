import './App.css'
import Wrapper from './component/wrapper/wrapper.component'
import ErrorModal from './component/error modal/error'
import { useContext } from 'react'
import { AppContext } from './context/app-context'

function App() {
  const { errorState } = useContext(AppContext)
  return (
    <div className="app">
      <Wrapper />
      {errorState && <ErrorModal />}
    </div>
  )
}

export default App
