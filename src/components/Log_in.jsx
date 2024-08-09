import React, { useState, useContext } from 'react'
import Poster from '../assets/Poster.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { CounterContext } from './Context/Counter';


function Log_in() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Navigate = useNavigate()
  const counterContext = useContext(CounterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/Log_in', {email, password})
    .then(result => {
      if(result.data === "the password is incorrect" || result.data === "No record existed" ){
        console.log("Invalid input");
        alert("Invalid input");
      }
      else{

        console.log(result.data);
        counterContext.setEmail (result.data.email);
        counterContext.setName (result.data.name);
        counterContext.setPassword (result.data.password);
        // console.log(counterContext.name);
        Navigate("/Linktree_Account")
      }
        
    })
    .catch(err => console.log(err))
    // setEmail("");
    // setPassword("");
  }

  return (
    <div className='w-full h-full  flex justify-center items-center mb-8'>
        <div className='w-2/3  flex mt-[200px] border-2 border-black shadow-lg shadow-blue-400'>
           {/* Right Part  */}
           <div className='w-[50%] my-auto h-full  px-4 py-4'>
               <div className='text-6xl font-bold flex justify-center mb-4'> Join Linktree</div>
               <div className='text-2xl text-gray-500 font-bold flex justify-center mb-4'>Login</div>
                   <form onSubmit={handleSubmit} className='flex flex-col px-8 gap-2'>
                       <label  className='text-[17px] font-bold font-sans text-slate-400'>Email Address:</label>
                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-2/3 rounded-md bg-slate-100 px-4 py-1  mb-2' placeholder='Email'/>
                       <label  className='text-[17px] font-bold font-sans text-slate-400'>Password:</label>
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-2/3 rounded-md bg-slate-100 px-4 py-1  mb-2' placeholder='Password'/>
                       <button type='submit' className='bg-purple-800 hover:bg-purple-900 py-2 px-4 rounded-lg mx-auto'>Submit</button>
                    </form>
            </div>
               {/* Left Part  */}
           <div className='w-[50%] h-full object-contain'> 
                <img src={Poster} alt="Poster" />
           </div>
        </div>
    </div>
  )
}

export default Log_in
