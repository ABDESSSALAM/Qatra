import React from 'react'
import Header from './Components/Header'
import HomeNav from './Components/HomeNav'
import Cards from './Components/Cards'
import Information from './Components/Information'
import Footer from './Components/Footer'




function Home() {
  

  return (
    <div className='w-full h-full '>
      <Header />
     
      <Cards />
      <Information />
      <Information />
      <Footer />
    </div>
  )
}

export default Home