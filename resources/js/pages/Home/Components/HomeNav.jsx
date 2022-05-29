import React from 'react'
import { Link } from 'react-router-dom'

function HomeNav() {
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
        const nav=navItems.map((item,idx)=><Link to={item.link} key={idx} className='p-2  m-1 bg-primary text-center text-white w-1/6 rounded-md text-lg'>{item.title}</Link>)
  return (
    <div className='container w-11/12 mx-auto '>
        <ul className='w-full cursor-pointer container mx-auto flex justify-center items-center '>
            {nav}
        </ul>
        
    </div>
  )
}

export default HomeNav