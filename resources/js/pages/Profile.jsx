import React from 'react'
import { useParams } from 'react-router-dom'
import HomeLayout from './Home/Components/HomeLayout';

function Profile() {
  const params=useParams();
  return (
       <HomeLayout>
         <div>Profile : {params.id} </div>
       </HomeLayout> 
        
  )
}

export default Profile