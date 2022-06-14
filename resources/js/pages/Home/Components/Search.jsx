import React,{useState,useEffect} from 'react'
import axios_api from '../../../CONF_AXIOS';

function Search(props) {
    const [villes,setVilles]=useState([]);
    useEffect(()=>{
      axios_api.get('villes')
      .then(res=>setVilles(res.data))
    })
    const ListVilles=villes.map((ville)=><option key={ville.id}  value={ville.id} >{ville.nomVille}</option>)
    const [idVille,setIdVille]=useState(0);
    const test=(e)=>{
      e.preventDefault();
      props.setUrl('carnavale/ville/2')
    }
    return (
    <form className='flex justify-end items-center bg-primary py-2 px-1 text-white rounded-md shadow-lg mx-2'>
        <div className='mx-12'>
            <span className='text-xl font-normal mr-1'>Ville :</span>
            <select  name="ville" className='text-black outline-none text-lg py-1 px-2 rounded-md ' >
                {ListVilles}
            </select>
        </div>
        <button onClick={test}  type="submit" className='bg-white text-primary rounded-lg shadow-xl py-1 px-2 uppercase text-lg mx-2 font-semibold hover:bg-gray-100'>rechercher</button>
    </form>
  )
}

export default Search