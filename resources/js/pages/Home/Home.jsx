import React,{useContext} from 'react'
import Header from './Components/Header'
import HomeNav from './Components/HomeNav'
import Cards from './Components/Cards'
import Information from './Components/Information'
import Footer from './Components/Footer'
import { UserContext } from '../../../Context/UserContext'



function Home() {
  const {user}=useContext(UserContext);
  console.log(user)
  return (
    <div className='w-full h-full '>
      {/* {user != null ?  <p>{user.user}</p> : <p>not logged</p>  } */}
      <Header />
     
      <Cards />
      <Information />
      <Information />
      <Footer />
    </div>
  )
}

export default Home