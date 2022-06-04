import React,{useState,useEffect} from 'react'
import Informative from './Compenent/Informative'
import VolontaireTable from './Compenent/VolontaireTable'
import axios_api from '../../CONF_AXIOS';
function Volontaire() {
  const [data,setData]=useState([]);
  const [rended,setRended]=useState(false);
  useEffect(()=>{

    if(!rended){
      axios_api.get('volontaires')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
      setRended(true)
    }

  },[data])
  return (
    <div className=''>
      <Informative bg="bg-primary" title="la list des Volontaires" icon="fa-solid fa-hand-holding-medical" />
      <VolontaireTable data={data} />
    </div>
  )
}

export default Volontaire