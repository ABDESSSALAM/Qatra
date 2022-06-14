import React,{useState,useEffect} from 'react'
import axios_api from '../../CONF_AXIOS'
import UrgenceCard from '../Home/Components/UrgenceCard'

function VolontaireProfile() {
    const [data,setData]=useState([])

  useEffect(()=>{
    axios_api.get('urgences/all')
    .then(res=>setData(res.data))
  },[])
  return (
    <>
        <h3 className='text-xl my-3'>la list des urgences </h3>
        <div className='w-full flex justify-around flex-wrap  '>
            {data.map(item=><UrgenceCard key={item.IdUrg} sangP={item.SanguinP} ville={item.nomVille} hospitale={item.Hospitale} />)}
              
            
        </div>
    </>
  )
}

export default VolontaireProfile