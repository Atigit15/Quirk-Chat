import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Chat        =   lazy(() =>  import ('./pages/Chat'));
const Login       =   lazy(() =>  import ('./pages/Login'));
const Register    =   lazy(() =>  import ('./pages/Register'));
const SetAvatar   =   lazy(() =>  import ('./pages/SetAvatar'));
const SetUsername =   lazy(() =>  import ('./pages/SetUsername'))


function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<></>}>
        <Routes>
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/setAvatar" element={<SetAvatar></SetAvatar>} />
          <Route path='/setusername' element={<SetUsername></SetUsername>} />
          <Route path="/" element={<Chat></Chat>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
