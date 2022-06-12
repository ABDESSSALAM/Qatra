import React,{useEffect,useState} from 'react'
import Card from './Card'
import axios_api from '../../../CONF_AXIOS';

function Cards() {
  const [carnavale,setCarnavale]=useState([]);
  useEffect( ()=>{
    axios_api.get('/carnavale/3').then(res=>{
   // setCarnavale(res.data);
   
    setCarnavale(res.data)
    });
    
  },[])

  const displayCarnavales=carnavale.map((item,idx)=>{
    return <Card key={idx} localisation={item.location} debut={item.dateDebut} fin={item.dateFin} />
  }
     )
  return (
    <div className='flex justify-center container w-11/12  my-2 cursor-pointer'>
      {carnavale.length==0 && <h3>no data to display</h3>}
      {carnavale.length>0 && displayCarnavales }
        
    </div>
  )
}

export default Cards