import React from 'react'
import Pic2 from '../assets/Pic2.webp'

function Customizesection() {
  return (
    <div className='w-full bg-pink-300 flex pt-[250px]'>
    <div className='w-1/2'>
        <div className='px-16'><img src={Pic2} alt="Pic" className='mx-auto w-[450px]'/></div>
    </div>

    <div className='w-1/2 flex flex-col px-14 py-8 justify-center gap-12 mx-8'>
      <div className='text-5xl font-bold text-purple-950 mb-2'>Create and customize your Linktree in minutes</div>
      <p className='font-bold text-xl text-purple-950 text-justify mb-2'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
      <div className='flex items-center gap-4'>
      <button className='bg-purple-900 text-white rounded-full px-4 py-3 text-xl'>Get started for free</button>
      </div>
    </div>

  </div>
  )
}

export default Customizesection
