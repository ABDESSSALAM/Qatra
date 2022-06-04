import React,{useState,useEffect} from 'react'
import UrgenceTable from './Compenent/UrgenceTable'
import Informative from './Compenent/Informative'
import axios_api from '../../CONF_AXIOS'

function Urgences() {
  const [data,setData]=useState([]);
  useEffect(()=>{

    axios_api.get('urgences/all')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))

  },[])
  return (
    <div className="flex flex-col w-full h-full ">
      <Informative bg="bg-secondary" title="la list des Urgences" icon="fa-solid fa-truck-medical" />
      <UrgenceTable data={data} />
      
      
    </div>
  )
}

export default Urgences