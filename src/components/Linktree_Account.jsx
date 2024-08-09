import React from 'react'
import { CounterContext } from './Context/Counter';
import { useContext } from 'react';
import Linktree_acc_sidebar from './Linktree_acc_sidebar';
import Linktree_acc_main from './Linktree_acc_main';

function Linktree_Account() {
  const counterState = useContext(CounterContext);
    console.log(counterState.email);

  return (
    <div className='flex'>
      <div className='w-[20%]'>
      <Linktree_acc_sidebar/>
      </div>
      <div className='w-[80%]'>
      <Linktree_acc_main/>
      </div>
    </div>
  )
}

export default Linktree_Account
