import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import BaseLayout from './pages/BaseLayout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route element={<BaseLayout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/register' element={"register"}/>
              <Route path='/login' element={"login"}/>
              <Route path='/dashboard' element={"dashbaord"}/>
            </Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App