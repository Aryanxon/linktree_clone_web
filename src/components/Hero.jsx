import React from 'react'
import Pic1 from '../assets/Pic1.webp'

function Hero() {
  return (
    <div className='w-full bg-green-800 pt-[200px] flex'>
      <div className='w-1/2 flex flex-col px-6 py-8 mx-8'>
        <div className='text-6xl font-bold text-yellow-400 mb-2 text-justify'>Everything you are. In one, simple link in bio.</div>
        <p className='font-bold text-xl text-yellow-300 text-justify mb-2'>Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className='flex items-center gap-4'>
        <input type="text" placeholder='linktree / your name' className='h-10 rounded-xl border-2 border-black'/>
        <button className='bg-slate-300 rounded-full px-4 py-3 text-xl font-bold'>Claim your Linktree</button>
        </div>
      </div>

      <div className='w-1/2'>
        <div className='px-16'><img src={Pic1} alt="Pic" className='mx-auto h-[450px]'/></div>
      </div>
    </div>
  )
}

export default Hero
