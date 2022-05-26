import React from 'react'

function Header() {
  return (
    <header className='flex flex-col container w-11/12 mx-auto bg-gray-100 px-2 py-1'>
        <div className='w-full flex justify-between'>
            <h1 className='text-2xl'>Qatra Logo</h1>
            <ul className='flex  cursor-pointer'>
                <li className='list-none mr-2 border-2  border-primary rounded-lg shadow-md py-1 px-2 text-primary font-semibold hover:text-white hover:bg-primary'>S'inscrire</li>
                <li className='list-none mr-2 border-2  border-primary rounded-lg shadow-md py-1 px-2 text-primary font-semibold hover:text-white hover:bg-primary'>Connecter</li>
                
            </ul>
        </div>
        <div className='bg-primary w-full h-72 my-3 flex justify-around py-0 opacity-95 text-white cursor-pointer'>
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