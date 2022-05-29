import React from 'react'
import { Link } from 'react-router-dom'

function TopHeader() {
  return (
    <div className=' flex justify-between w-11/12 mx-auto py-2 '>
            <h1 className='text-2xl'>Qatra Logo</h1>
            <ul className='flex  cursor-pointer'>
                
                <li className='list-none mr-2 border-2  border-primary rounded-lg shadow-md py-1 px-2 text-primary font-semibold hover:text-white hover:bg-primary'><Link to="/login">Connecter</Link> </li>
                
            </ul>
        </div>
  )
}

export default TopHeader