import React from 'react'
import { Link } from 'react-router-dom'

function TopHeader() {
  const navItems=[
    {
      id:1,
      title:'Home',
      link:'/'
    }
    ,
    {
      id:1,
      title:'Importance',
      link:'/importance'
    }
    ,
    {
      id:1,
      title:'Conseils',
      link:'/advice'
    }
    ,
    {
      id:1,
      title:'Carnavals',
      link:'/carnaval'
    }
    ,
    {
      id:1,
      title:'Log In',
      link:'/login'
    }
   ]
    const nav=navItems.map((item,idx)=><Link to={item.link} key={idx} className='p-2    text-center text-white  rounded-md text-lg border-r border-gray-50 hover:text-gray-400 hover:border-gray-400'>{item.title}</Link>)
  return (
    <div className='flex justify-between w-11/12 mx-auto py-2 '>
            <h1 className='text-2xl'>Qatra Logo</h1>
            <ul className='flex  cursor-pointer bg-primary rounded-lg px-0'>
                {nav}
                {/* <li className='list-none mr-2 border-2  border-primary rounded-lg shadow-md py-1 px-2 text-primary font-semibold hover:text-white hover:bg-primary'><Link to="/login">Connecter</Link> </li> */}
                
            </ul>
        </div>
  )
}

export default TopHeader