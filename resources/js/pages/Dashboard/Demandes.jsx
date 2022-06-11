import React,{useState,useEffect} from 'react'
import Informative from './Compenent/Informative'
import DemandeTable from './Compenent/DemandeTable'
import axios_api from '../../CONF_AXIOS'
function Demandes() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios_api.get('demandes')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])


  return (
    
    <div className="flex flex-col w-full h-full ">
    <Informative bg="bg-secondary" title="la list des demandes" icon="fa-solid fa-truck-medical" />
    <DemandeTable data={data} />
    
    
  </div>
  )
}

export default Demandes