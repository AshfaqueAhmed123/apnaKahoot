import React from 'react'
import {BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import EnterPINPage from './pages/EnterPINPage'
import EnterNickNamePage from './pages/EnterNickNamePage';
import AvatarSelection from './pages/AvatarSelection';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<EnterPINPage/>}></Route>
          <Route path='/pin' element={<EnterPINPage/>}></Route>
          <Route path='/nickname' element={<EnterNickNamePage/>}></Route>
          <Route path='/avatar' element={<AvatarSelection/>}></Route>
          <Route path='/quiz/:id' element={<Quiz/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App