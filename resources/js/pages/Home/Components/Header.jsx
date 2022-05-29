import React from 'react'
import TopHeader from './TopHeader'
function Header() {
  return (
    <header className='flex flex-col  '>
        <TopHeader />
        <div className='bg-primary w-screen  h-72 my-0 flex justify-around py-0 opacity-95 text-white cursor-pointer'>
            <div className='h-full flex flex-col justify-center items-center'>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className='rounded-xl bg-secondary shadow-lg text-white py-1 px-2 text-lg font-bold'> Participer </button>
            </div>
            <div>
                <img src="/imgs/img-header.png" className='w-72'  />
            </div>
        </div>
    </header>
  )
}

export default Header