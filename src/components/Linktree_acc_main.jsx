import React from 'react'
import { CounterContext } from './Context/Counter';
import { useContext } from 'react';
import { RxSpeakerLoud } from "react-icons/rx";

function Linktree_acc_main() {

    const counterSta = useContext(CounterContext);
    let name = counterSta.name
    let email = counterSta.email
    let password = counterSta.password

  return (
    <div className='bg-yellow-200'>
        <div className=' py-10 px-8 mb-10'>
            <div className='flex justify-between'>
                 <div className='text-4xl font-bold text-black'>Linktree Account</div>
                 <div className='text-xl text-black bg-white rounded-full h-8 w-8 flex justify-center items-center -rotate-45'><RxSpeakerLoud /></div>
            </div>
        <div className='text-4xl font-bold text-black'>Welcome <span className='text-4xl text-green-400 capitalize'>{name}</span></div>
        <div className='flex gap-4'>
        <button className='bg-purple-500 px-4 py-2 my-10 rounded-2xl hover:bg-gray-500 hover:text-white duration-700 '>Explore</button>
        <button className='bg-gray-500 px-4 py-2 my-10 rounded-2xl hover:bg-purple-900 hover:text-white duration-700 '>Services</button>
        </div>
        <div className='text-4xl font-bold text-slate-800'>Your Email: {email}</div>
        <div className='text-2xl font-bold text-slate-800'>Your Password: {password}</div>
        </div>
    </div>
  )
}

export default Linktree_acc_main
