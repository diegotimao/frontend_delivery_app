import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png';
import user from '../../../public/user.png';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='p-4 w-full bg-[#654DE4] border-blue-2-200 fixed'>
      <div className='m-auto max-w-6xl flex justify-between items-center' >
        <Image src={logo} alt='Logo Image' className='h-10' />

        <div className='flex items-center gap-2'>
          <button className='w-12 h-10 bg-[#ffb327] hover:w-14 hover:h-11 rounded-md flex justify-center items-center'>
            <ShoppingBag color='white' />
          </button>
          <button className='w-48 h-11 hover:bg-[#02e3cc42] flex justify-start items-center gap-2
           text-white rounded-3xl hover:pl-3 translate-x-4'>
            <Image src={user} alt='User Image' className='w-10 h-10 rounded-3xl' />
            Diego Santos
          </button>
        </div>
      </div>
    </nav>
  )
}
