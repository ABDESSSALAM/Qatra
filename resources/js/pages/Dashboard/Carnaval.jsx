import React,{useState,useEffect} from 'react'
import CarnavalTable from './Compenent/CarnavalTable';
import axios_api from '../../CONF_AXIOS';

function Carnaval() {
  const [open,setopen]=useState(false);
  const toggleOpen=()=>{
    setopen(!open)}

    //fetch ville
  const Villes=['Meknes','Fes','Rabat'];
  const ListVilles=Villes.map((ville,idx)=><option key={idx} value={idx}>{ville}</option>)
  
  //featch data
  const[data,setData]=useState([]);

  useEffect(()=>{
    axios_api.get('carnavale/all')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));

  },[])
  
  


  
  return (
    <div className='w-full h-full flex flex-col'>
     <button onClick={toggleOpen} className='self-end bg-green-600 text-white font-medium px-2 py-1 rounded-lg shadow-md'>Nouveau</button>
     {/* add new  */}
     <form className={`${open ? 'flex' :'hidden'} w-full  flex-col  bg-primary text-white my-2 py-2 px-1 shadow-md rounded-sm ease-in-out duration-1000`}>
      <div className='flex justify-evenly items-center'>
        <div >
        <span className='mr-1 text-lg'>localisation :</span>
        <input type="text" className='rounded-md outline-none p-1 text-black' />
       
      </div>
      <div>
        <span className='mr-1 text-lg'>date debut :</span>
        <input type="date" name=""  className='rounded-md outline-none p-1 text-black'/>
      </div>
      <div>
        <span className='mr-1 text-lg'>date fin :</span>
        <input type="date" name="" className='rounded-md outline-none p-1 text-black' />
      </div>
      <div>
        <span className='mr-1 text-lg'>Ville :</span>
        <select name="ville" className='rounded-md outline-none p-1 text-black'>
          {ListVilles}
        </select>
      </div>
      </div>
      <button className='self-end bg-green-600 text-white font-medium px-2 py-1 rounded-lg shadow-md mt-2 ml-3'>Ajouter</button>
     </form>
     {/* display data */}
      <CarnavalTable data={data} />
{/* end display data */}
    </div>
  )
}

export default Carnaval