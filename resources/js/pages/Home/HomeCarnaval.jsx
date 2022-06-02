import React,{} from 'react'
import Search from './Components/Search'
import Cards from './Components/Cards'
import HomeLayout from './Components/HomeLayout'
import axios_api from '../../CONF_AXIOS'

function HomeCarnaval() {
  return (
    <HomeLayout>
      <Search />
      <Cards />
    </HomeLayout>
  )
}

export default HomeCarnaval