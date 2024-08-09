import React from 'react'
import Logo from '../assets/Link-tree-logo.webp'
import {Link} from "react-router-dom"

function Navbar() {

  return (
    <div className='absolute w-full bg-gray-300 flex justify-between px-6 py-4 rounded-full my-8'>
        <div className='flex gap-4 justify-center items-center'>
           <Link to="/"> <img src={Logo} alt="Logo" className='flex w-8 h-8'/></Link>
             <ul className='flex gap-4 my-auto'>
                <Link to="/Template"> <li className='text-slate-900 cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg'>Templates</li></Link>
                <Link to="/Marketplace"> <li className='text-slate-900 cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg'>Marketplace</li></Link>
                <Link to="/Discover"> <li className='text-slate-900 cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg'>Discover</li></Link>
                <Link to="/Pricing"> <li className='text-slate-900 cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg'>Pricing</li></Link>
                <Link to="/Learn"> <li className='text-slate-900 cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg'>Learn</li></Link>
            </ul>
        </div>
        <div className='my-auto flex gap-8'>
        <Link to="/Log_in">  <button className='text-xl bg-slate-300 px-4 py-4 text-gray-500 rounded-xl hover:bg-slate-400'>Log in</button></Link>
        <Link to="/Sign_up">   <button className='text-xl bg-slate-950 hover:bg-slate-800 text-white rounded-full px-4 py-4'>Sign up free</button></Link>
        </div>

      
    </div>
  )
}

export default Navbar
