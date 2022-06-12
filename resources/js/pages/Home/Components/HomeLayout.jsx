import React from 'react'

import TopHeader from "./TopHeader";


function HomeLayout({children}) {
  return (
    <div className=''>
    <TopHeader />
   
    {/* <HomeNav /> */}
    
    <main className='w-full cursor-pointer  py-2'>{children}</main>
    </div>
  )
}

export default HomeLayout