import React,{} from 'react'
import Search from './Components/Search'
import Cards from './Components/Cards'
import HomeLayout from './Components/HomeLayout'


function HomeCarnaval() {
  return (
    <HomeLayout>
      <Search />
      <Cards />
    </HomeLayout>
  )
}

export default HomeCarnaval