import React from 'react'
import EnterPINPage from './pages/EnterPINPage'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  return (
    <div>
      <EnterPINPage />
      <LoadingScreen loadingText={"Connecting to kahoot ..."} />
    </div>
  )
}

export default App