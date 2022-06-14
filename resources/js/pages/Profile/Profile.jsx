import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import HomeLayout from '../Home/Components/HomeLayout';
import VolontaireProfile from './VolontaireProfile';
import CitoyenProfile from './CitoyenProfile';
import { UserContext } from '../../../Context/UserContext';
import axios_api from '../../CONF_AXIOS';
function Profile() {
  //const params=useParams();

  const {user}=useContext(UserContext);
  
  const LogOut = async ()=>{
    await axios_api.post('logout')
    .then(res=>console.log(res.data))
  }
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
            
            <h3 className='font-bold'>{user.nom +" " + user.prenom}</h3>
            <h4 className='text-gray-100'>
              {user.role==1 && 'Citoyen'}
              {user.role==2 && 'Volontaire'}
              {(user.role==3 || user.role==4) && 'responsable '}
              {user.role==5 && 'responsable '}

              </h4>
            
            </div>
            {/* middle */}
            <div className='flex items-center mt-4'>
            <i className='fas fa-phone mx-2'></i>
              <p>{user.telephone}</p>
            </div>
            <div className='flex items-center'>
            <i className="fa-regular fa-envelope mx-2"></i>
              <p>{user.email}</p>
            </div>
            {/* end */}
            <div className=" flex flex-col justify-end h-24  text-lg text-red-300 cursor-pointer">
              {/* <i className="fa-solid fa-right-from-bracket mx-2 "></i> */}
              <button onClick={LogOut}  className='rounded-xl shadow-lg bg-secondary text-white py-1 px-3 text-xl '>déconnecter</button>
            </div>
          </div>
          {/* content */}
          <div className='bg-gray-50 flex flex-col items-center w-10/12'>
            {user.role==1 && <CitoyenProfile />}
            {user.role==2 && <VolontaireProfile/> }
            
            
          </div>
         </div>
       </HomeLayout> 
        
  )
}

export default Profile

