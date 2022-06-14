import React,{useState,useEffect} from 'react'
import Informative from './Compenent/Informative'
import AssociationTable from './Compenent/AssociationTable'
import axios_api from '../../CONF_AXIOS'

function Association() {
  const [data,setData]=useState([]);
  const [url,setUrl]=useState('associations')
  useEffect(()=>{
    axios_api.get(url)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[url])
  return (
    <div>
      <Informative bg="bg-primary" title="la list des associations" icon="fa-solid fa-hospital-user" />
      <div className=' p-2 cursor-pointer'>
        <span onClick={()=>{setUrl('associationActif')}} className='py-1 px-2 my-2 bg-gray-400 text-white shadow-md mx-3 rounded-md hover:text-black text-lg '>actif</span>
        <span onClick={()=>{setUrl('associationNonActif')}} className='py-1 px-2 my-2 bg-gray-400 text-white shadow-md mx-3 rounded-md hover:text-black text-lg '>non vérifer</span>
      </div>
      <AssociationTable data={data} />
    </div>
  )
}

export default Association