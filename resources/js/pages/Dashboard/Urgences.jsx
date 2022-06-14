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

  //form participation
  const [open,setOpen]=useState(false);
  const [urgID,setUrgID]=useState(0);
  const active=(IDurg)=>{
    setOpen(true)
    console.log(IDurg)
    setUrgID(IDurg)
  }
  
  const [volontaires,setVolontaires]=useState([]);
  useEffect(()=>{
    axios_api.get('volontaires')
    .then(res=>setVolontaires(res.data))
  },[])
  const ListVolontaire=volontaires.map((volontaire)=><option key={volontaire.IdVolontaire}  value={volontaire.IdVolontaire} >{volontaire.nom+' ' +volontaire.prenom }</option>)
    
  const [IdVolontaire,setIdVolontaire]=useState(0)
  const addParticiption =async (e)=>{
    e.preventDefault()
    const data={
      IdUrg:urgID,
      IdVolontaire:IdVolontaire
    }
    await axios_api.post('addParticipationUrgence',data)
    .then(res=>console.log(res.data))
  }
  return (
    <div className="flex flex-col w-full h-full ">
      <Informative bg="bg-secondary" title="la list des Urgences" icon="fa-solid fa-truck-medical" />
      {open && 
      <form className='flex w-2/3 justify-start p-2 items-center border rounded-md shadow-md'>
            <div className='flex items-center  mx-2 w-2/3'>
                <span  className="text-sm w-1/2 font-medium text-gray-900 dark:text-gray-400">Sanguin Groupe</span>
                <select onChange={(e)=>setIdVolontaire(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {ListVolontaire}
                 </select>
            </div>
            
            <div className=' flex  justify-end items-center  h-20  mx-2 w-1/3  '>
                <button onClick={addParticiption} className='bg-primary text-white py-2 mt-2 w-24 rounded-md shadow-md hover:text-gray-400' >valider</button>
            </div>
            
        </form>
         }
      <UrgenceTable data={data} active={active} />
      
      
    </div>
  )
}

export default Urgences