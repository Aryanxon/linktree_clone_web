import React from 'react'
import Logo from '../assets/Link-tree-logo.webp'
import {Link} from "react-router-dom"
import { BsMenuButtonWide } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { TbCircleSquare } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import { CounterContext } from './Context/Counter';
import { useContext } from 'react';

function Linktree_acc_sidebar() {

    const counterStat = useContext(CounterContext);
    let name = counterStat.name

  return (
    <div className='h-full fixed bg-slate-300 rounded-r-lg'>
        <div className='mx-4 my-4 flex flex-col gap-4'>
            <div><Link to="/"> <img src={Logo} alt="Logo" className='flex w-8 h-8'/></Link></div>
            <div className='flex gap-2 text-xl items-center hover:bg-purple-300 cursor-pointer py-2 pl-2 pr-12 rounded-lg'><BsMenuButtonWide className='w-6 h-6'/>Links</div>
            <div className='flex gap-2 text-xl items-center hover:bg-purple-300 cursor-pointer py-2 pl-2 pr-12 rounded-lg'><CiShop className='w-6 h-6'/>Shop</div>
            <div className='flex gap-2 text-xl items-center hover:bg-purple-300 cursor-pointer py-2 pl-2 pr-12 rounded-lg'><TbCircleSquare className='w-6 h-6'/>Appearance</div>
            <div className='flex gap-2 text-xl items-center hover:bg-purple-300 cursor-pointer py-2 pl-2 pr-12 rounded-lg'><SiGoogleanalytics className='w-6 h-6'/>Analytics</div>
            <div className='flex gap-2 text-xl items-center hover:bg-purple-300 cursor-pointer py-2 pl-2 pr-12 rounded-lg capitalize'><div className='w-7 h- 7 bg-gray-500 rounded-full flex justify-center text-white capitalize'>{name.slice(0,1)}</div>{name}</div>
        </div>

    </div>
  )
}

export default Linktree_acc_sidebar
