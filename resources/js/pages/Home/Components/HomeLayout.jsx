import React from 'react'
import HomeNav from "./HomeNav";
import TopHeader from "./TopHeader";


function HomeLayout({children}) {
  return (
    <div className=''>
    <TopHeader />
   
    <HomeNav />
    
    <main className='w-full cursor-pointer '>{children}</main>
    </div>
  )
}

export default HomeLayout