import React, { useState } from 'react'
import Poster from '../assets/Poster.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Sign_up() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()

  const collectData = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/Sign_up', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    setName("");
    setEmail("");
    setPassword("");
    Navigate("/Log_in")
   
  }

  return (
    <div className='w-full h-full  flex justify-center items-center mb-8'>
        <div className='w-2/3 flex mt-[200px] border-2 border-black shadow-lg shadow-blue-400'>
              {/* Left Part  */}
           <div className='w-[35%] h-full object-contain'> 
                <img src={Poster} alt="Poster"/>
           </div>
           {/* Right Part  */}
           <div className='w-[65%] h-full border-l-2 border-black px-4 py-4'>
               <div className='text-6xl font-bold flex justify-center mb-4'> Join Linktree Now</div>
               <div className='text-2xl text-gray-500 font-bold flex justify-center mb-4'> Sign Up for free</div>

                   <form onSubmit={collectData} className='flex flex-col px-8 gap-2 mb-4'>
                       <label className='text-[17px] font-bold font-sans text-slate-400'>Name:</label>
                       <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-2/3 rounded-md bg-slate-100 px-4 py-1 mb-2' placeholder='Name'/>
                       <label  className='text-[17px] font-bold font-sans text-slate-400'>Email Address:</label>
                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-2/3 rounded-md bg-slate-100 px-4 py-1  mb-2' placeholder='Email'/>
                       <label  className='text-[17px] font-bold font-sans text-slate-400'>Password:</label>
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-2/3 rounded-md bg-slate-100 px-4 py-1  mb-2' placeholder='Password'/>
                       <button type='submit' className='bg-purple-800 hover:bg-purple-900 py-2 px-4 rounded-lg mx-auto'>Submit</button>
                    </form>
                    <div className='flex flex-col px-8 gap-2'>
                   <Link to="/Log_in"><button className='bg-purple-600 hover:bg-purple-900 py-2 px-4 rounded-lg mx-auto'>Login</button></Link> 
                    </div>
            </div>
        </div>
    </div>

  )
}

export default Sign_up
