import React from 'react'
import { Link } from 'react-router-dom'

function HomeNav() {
    const navItems=[
        'Home',
        'Importance',
        'Conseils',
        'Carnavals',
        'Centres',
        'Log In']
        const nav=navItems.map((item,idx)=><li key={idx} className='p-2  m-1 bg-primary text-center text-white w-1/6'>{item}</li>)
  return (
    <div className='container w-11/12 mx-auto '>
        <ul className='w-full cursor-pointer container mx-auto flex justify-center items-center '>
            {nav}
        </ul>
        
    </div>
  )
}

export default HomeNav