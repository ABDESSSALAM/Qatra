import React,{useState,useEffect} from 'react'
import Search from './Components/Search'
import Cards from './Components/Cards'
import HomeLayout from './Components/HomeLayout'
import axios_api from '../../CONF_AXIOS'
import Card from './Components/Card'
function HomeCarnaval() {

  const [url,setUrl]=useState('carnavale/all')
  const [carnavale,setCarnavale]=useState([]);
  const [villes,setVilles]=useState([]);
  useEffect(()=>{
    axios_api.get('villes')
    .then(res=>setVilles(res.data))
  })
  const ListVilles=villes.map((ville)=><option key={ville.id}  value={ville.id} >{ville.nomVille}</option>)
  const [idVille,setIdVille]=useState(0);
  useEffect( ()=>{
    axios_api.get(url).then(res=>{
    setCarnavale(res.data)
    });
    
  },[])
  console.log(url)
  const displayCarnavales=carnavale.map((item,idx)=>{
    return <Card IdCarnaval={item.IdCarnaval} key={idx} localisation={item.location} debut={item.dateDebut} fin={item.dateFin} />
  }
     )
 const refresh = (e)=>{e.preventDefault()}
  return (
    <HomeLayout>
      <form className='flex justify-end items-center bg-primary py-2 px-1 text-white rounded-md shadow-lg mx-2'>
        <div className='mx-12'>
            <span className='text-xl font-normal mr-1'>Ville :</span>
            <select  onChange={(e)=>setUrl('carnavale/ville/'+e.target.value)} name="ville" className='text-black outline-none text-lg py-1 px-2 rounded-md ' >
                {ListVilles}
            </select>
        </div>
        <button  onClick={refresh} type="submit" className='bg-white text-primary rounded-lg shadow-xl py-1 px-2 uppercase text-lg mx-2 font-semibold hover:bg-gray-100'>rechercher</button>
    </form>
    <div className='flex flex-wrap justify-center container w-11/12  my-2 cursor-pointer'>
      {carnavale.length==0 && <h3>no data to display</h3>}
      {carnavale.length>0 && displayCarnavales }
        
    </div>
    </HomeLayout>
  )
}

export default HomeCarnaval