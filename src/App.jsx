import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Customizesection from './components/Customizesection.jsx'
import { Routes, Route } from 'react-router-dom'
import Sign_up from './components/Sign_up.jsx'
import Log_in from './components/Log_in.jsx'
import Linktree_Account from './components/Linktree_Account.jsx'


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/Sign_up' element={<><Navbar/><Sign_up/></>}/>
        <Route path='/Log_in' element={<><Navbar/><Log_in/></>}/>
        <Route path='/Linktree_account' element={<Linktree_Account/>}/>
        <Route path='/' element={<><Navbar/><Hero/> <Customizesection/></>}/>
        <Route path='/Template' element={<><Navbar/></>}/>
        <Route path='/Marketplace' element={<><Navbar/></>}/>
        <Route path='/Discover' element={<><Navbar/></>}/>
        <Route path='/Pricing' element={<><Navbar/></>}/>
        <Route path='/Learn' element={<><Navbar/></>}/>
      </Routes>
    </div>
  )
}

export default App
