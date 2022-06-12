import React from 'react'
import { useParams } from 'react-router-dom'
import HomeLayout from './Home/Components/HomeLayout';
import UrgenceCard from './Home/Components/UrgenceCard';

function Profile() {
  //const params=useParams();
  return (
       <HomeLayout>
         {/* <div>Profile : {params.id} </div> */}
         <div className='flex w-screen '>
          {/* nav bar */}
          <div className='bg-primary px-2 py-1 text-white w-2/12 h-80 shadow-lg mx-1 rounded-md'>
            {/* top */}
            <div className='flex flex-col items-center'>
              <div className='bg-gray-300 rounded-full flex flex-col items-center justify-center h-24 w-24'>
                <i className="fa-solid fa-user text-6xl"></i>
              </div>
            
            <h3 className='font-bold'>Nom Prenom</h3>
            <h4 className='text-gray-100'>@username</h4>
            <h3>Volontaire</h3>
            </div>
            {/* middle */}
            <div className='flex items-center mt-4'>
            <i className='fas fa-phone mx-2'></i>
              <p>+212600000000</p>
            </div>
            <div className='flex items-center'>
            <i className="fa-regular fa-envelope mx-2"></i>
              <p>contact@qatra.ma</p>
            </div>
            {/* end */}
            <div className=" flex mt-3  items-end  text-lg text-red-300 cursor-pointer">
              <i className="fa-solid fa-right-from-bracket mx-2 "></i>
              <h4>Log out</h4>
            </div>
          </div>
          {/* content */}
          <div className='bg-gray-50 flex flex-col items-center w-10/12'>
            <h3 className='text-xl my-3'>des urgences dans votre ville</h3>
            <div className='w-full flex justify-around flex-wrap  '>
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
              <UrgenceCard sangP="A+" ville="Meknes" hospitale="Mohemmed V" />
            </div>
            
          </div>
         </div>
       </HomeLayout> 
        
  )
}

export default Profile