import React,{useState,useEffect} from 'react'
import Informative from './Compenent/Informative'
import AssociationTable from './Compenent/AssociationTable'
import axios_api from '../../CONF_AXIOS'

function Association() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios_api.get('associations')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <Informative bg="bg-primary" title="la list des associations" icon="fa-solid fa-hospital-user" />
      <AssociationTable data={data} />
    </div>
  )
}

export default Association