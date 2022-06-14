import React,{useState,useEffect,useCallback, useContext} from 'react'
import CarnavalTable from './Compenent/CarnavalTable';
import Informative from './Compenent/Informative';
import axios_api from '../../CONF_AXIOS';
import { UserContext } from '../../../Context/UserContext';

function Carnaval() {
  const [open,setopen]=useState(false);
  const toggleOpen=()=>{
    setopen(!open)}

    //fetch ville
    const [villes,setVilles]=useState([]);
    useEffect(()=>{
      axios_api.get('villes')
      .then(res=>setVilles(res.data))
    })
    const ListVilles=villes.map((ville)=><option key={ville.id}  value={ville.id} >{ville.nomVille}</option>)
  
  //featch data
  const[data,setData]=useState([]);

  useEffect(()=>{
    axios_api.get('carnavale/all')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));

  },[])
  
  //add carnaval
  const [location,setLocation]=useState('');
  const [dateDebut,setDateDebut]=useState('');
  const [dateFin,setDateFin]=useState('')
  const [ville,setVille]=useState(0);
  const {user}=useContext(UserContext);
  
  //get association id
  
    const addCarnavale = (e)=>{
      e.preventDefault();
      let data={
        dateDebut:dateDebut,
        dateFin:dateFin,
        ville:ville,
        location:location
      }
      
      axios_api.post('addCarnavale',data)
      .then(res=>console.log(res.data))
    }
   


  
  return (
    <div className='w-full h-full flex flex-col'>
      <Informative bg="bg-primary" title="la list des carnavale" icon="fa-solid fa-caravan" />
     {user.role==4 &&  <button onClick={toggleOpen} className='self-end bg-green-600 text-white font-medium px-2 py-1 rounded-lg shadow-md'>Nouveau</button>}
     {/* add new  */}
     <form className={`${open ? 'flex' :'hidden'} w-full  flex-col  bg-primary text-white my-2 py-2 px-1 shadow-md rounded-sm ease-in-out duration-1000`}>
      <div className='flex justify-evenly items-center'>
        <div >
        <span className='mr-1 text-lg'>localisation :</span>
        <input type="text" onChange={(e)=>setLocation(e.target.value)} className='rounded-md outline-none p-1 text-black' />
       
      </div>
      <div>
        <span className='mr-1 text-lg'>date debut :</span>
        <input type="date"  onChange={(e)=>setDateDebut(e.target.value)}  className='rounded-md outline-none p-1 text-black'/>
      </div>
      <div>
        <span className='mr-1 text-lg'>date fin :</span>
        <input type="date"  onChange={(e)=>setDateFin(e.target.value)} className='rounded-md outline-none p-1 text-black' />
      </div>
      <div>
        <span className='mr-1 text-lg'>Ville :</span>
        <select onChange={(e)=>setVille(e.target.value)} name="ville" className='rounded-md outline-none p-1 text-black'>
          {ListVilles}
        </select>
      </div>
      </div>
      <button onClick={addCarnavale} className='self-end bg-green-600 text-white font-medium px-2 py-1 rounded-lg shadow-md mt-2 ml-3'>Ajouter</button>
     </form>
     {/* display data */}
      <CarnavalTable data={data} />
{/* end display data */}
    </div>
  )
}

export default Carnaval