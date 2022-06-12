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
      {/* association */}
      <div className='w-full bg-primary flex h-36 text-white items-center justify-center px-4 my-4'>
        <div className='flex flex-col h-full justify-center items-center w-1/2'>
        <i className="fa-solid fa-hospital-user text-7xl"></i>
        <h2 className='font-mono text-xl'>association</h2>
        </div>
        
         <ul className='list-disc text-lg w-1/2'>
           <li>gérer les carnavales</li>
           <li>gérer les urgences</li>
           <li>consomer les volonatires</li>
         </ul>
          
      </div>

      
      {/* volontaire */}
        <div className='w-full bg-primary flex h-36 text-white items-center justify-center px-4 my-4'>
              
        <div className='flex flex-col h-full justify-center items-center w-1/2'>
        <i className="fa-solid fa-hand-holding-medical text-7xl"></i>
        <h2 className='font-mono text-xl'>volontaire</h2>
        </div>
        
         <ul className='list-disc text-lg w-1/2'>
            <li>participer à les carnavales</li>
            <li>participer à les urgences</li>
            <li>demande du sang</li>
         </ul>
          </div>
              
      {/* vitoyen */}
      <div className='w-full bg-primary flex h-36 text-white items-center justify-center px-4 my-4'>
        <div className='flex flex-col h-full justify-center items-center w-1/2'>
        <i className="fa-solid fa-truck-medical text-7xl"></i>
        <h2 className='font-mono text-xl'>citoyen</h2>
        </div>
        
         <ul className='list-disc text-lg w-1/2'>
           <li>demande du sang</li>
           <li>envoyer les urgences</li>
           <li>consomer votre demande</li>
         </ul>
         
       </div>
      <Footer />
    </div>
  )
}

export default Home