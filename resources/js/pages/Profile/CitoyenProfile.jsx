import React,{useState,useEffect} from 'react'
import axios_api from '../../CONF_AXIOS';
function CitoyenProfile() {

     //styling and data
     const DATA_HEADER=['Sanguin Groupe','Hospitale','date','Etat'];
     const STYLE_THEAD="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mt-4";
     const DateHeader=DATA_HEADER.map((head,idx)=><th key={idx} scope="col" className="px-6 py-3">{head}</th>)

     //manage data for table
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios_api.get('demandesCitoyen')
        .then(res=>setData(res.data))
        
    },[])

    const ROW_TR_STYLE=" border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
    const ROW_TH_STYLE="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap";
    const pending=<span className='bg-yellow-300 text-black font-semibold px-2 py-1 rounded-lg shadow-sm'>encore</span>
    const done=<span className='bg-green-400 text-black font-semibold px-2 py-1 rounded-lg shadow-sm'>accepter</span>

    const dataRow=data.map((row)=>{
        return(
            <tr key={row.CodeD} className={ROW_TR_STYLE}>
                <th scope='row' className={ROW_TH_STYLE}>
                    {row.SanguinP}
                </th>
                <td className="px-6 py-4">
                    {row.Hospitale}
                </td>
               
                <td className="px-6 py-4">
                    {row.DateUrg.slice(0,10)}
                </td>
                
                <td className="px-6 py-4">
                      {row.Etat==0? pending : done }
                  </td>
            </tr>
        )
    })

    //form
    const [open,setOpen]=useState(false);
    const groupSang=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
    const ListGroupSang=groupSang.map((sg,idx)=><option key={idx} value={sg}>{sg}</option>)
    
    const [sangP,setSangP]=useState('')
    const [hospitale,setHospitale]=useState('')

    const addDemande= async (e)=>{
        e.preventDefault();
        if(sangP==''){
            setSangP(groupSang[0])
        }
        const data={sangP:sangP,hospitale:hospitale}
        await axios_api.post('addDemande',data)
        .then(res=>console.log(res.data))
    }
  
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2 mt-3 cursor-pointer w-2/3 ">

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className={STYLE_THEAD}>
            <tr>
                {DateHeader}
            </tr>
            
        </thead>
        <tbody>
            {dataRow}
           
        </tbody>
    </table>
    <div className='w-full flex flex-col items-center justify-center'>
        <button onClick={()=>{setOpen(!open)}} className='text-blue-500 bg-gray-200 rounded-md shadow-lg py-1 px-2 my-2 w-20'>nouveau</button>
    </div>
    {open && 
        <form className='flex w-11/12 justify-start p-2 items-end'>
            <div className='flex flex-col justify-around h-20 mx-2 w-2/6'>
                <span  className="text-sm font-medium text-gray-900 dark:text-gray-400">Sanguin Groupe</span>
                <select onChange={(e)=>setSangP(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {ListGroupSang}
                 </select>
            </div>
            <div className='flex flex-col justify-around h-20 mx-2 w-2/6'>
                <span className='text-sm font-medium text-gray-900 dark:text-gray-400'>Hospitale</span>
                <input onChange={(e)=>setHospitale(e.target.value)} type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className=' flex  justify-end items-center  h-20  mx-2 w-4/6  '>
                <button onClick={addDemande} className='bg-primary text-white py-2 mt-2 w-24 rounded-md shadow-md hover:text-gray-400' >valider</button>
            </div>
            
        </form>
    }
    </div>
  )
}

export default CitoyenProfile