import React,{useContext,useState} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../../Context/UserContext'
import axios_api from '../../../CONF_AXIOS';

function Card(props) {
  const {user}=useContext(UserContext);
  const [redirect,setRedirect]=useState(false)
  const participer= async ()=>{
    if(!user.role || user.role!=2){
     setRedirect(true)
    }else{

      await axios_api.post('addParticipationCarnavale',{Idcarnavale:props.IdCarnaval})
      .then(res=>console.log(res.data))
      
    }
  }
  if(redirect){
    return <Navigate to="/login" />
  }

  
  return (
    <div className='w-52 py-2 bg-primary flex flex-col items-stretch text-white rounded-lg shadow-lg mx-2'>
        <p className='text-xl text-center font-bold border-b-2 border-gray-300'>Caranaval</p>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>à :</span>
            <span>{props.localisation} </span>
        </div>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>de:</span>
            <span>{props.debut}</span>
        </div>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>jusqu'à :</span>
            <span>{props.fin}</span>
        </div>
        <button onClick={participer} className='bg-white text-primary text-lg mx-1 rounded-md'>participer</button>
    </div>
  )
}

export default Card