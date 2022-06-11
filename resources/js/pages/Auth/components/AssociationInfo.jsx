import React,{ useState} from 'react'
import axios_api from '../../../CONF_AXIOS';

function AssociationInfo(props) {
  //styling
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
   
   // data
   const Villes=props.villes;
    const ListVilles=Villes.map((ville)=><option key={ville.id} value={ville.id} >{ville.nomVille}</option>)
   
   //style
   const inputWrapper="flex mx-auto w-11/12   justify-around my-3";
   const inputStyle="w-7/12 outline-none rounded-md px-3 text-lg";
   const spanStyle="w-5/12 text-white text-xl";

  const [NomAssoc,setNomAssoc]=useState('')
  const [dateCreation,setdateCreation]=useState('')
  const [ville,setville]=useState(0)

  const register= async (e)=>{
    e.preventDefault();
    //validation

    let data=props.data;
    const newData={
      dateCreation:dateCreation,
      ville:ville,
      NomAssoc:NomAssoc
    }
    data={...data,...newData};
    props.setDataUser(data)
    await axios_api.post('register',data)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
   return (
     <div className='w-full bg-primary px-4 py-2 flex md:flex-col items-center  shadow-lg cursor-pointer md:h-80'>
         <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
             <h3 className='text-white text-6xl mr-11'>Association</h3>
             <i className="fa-solid fa-hospital-user text-white text-7xl"></i>
         </div>
         <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
           <div className={`${inputWrapper} `}>
             <span className={`${spanStyle}`}>Nom d'association :</span>
             <input  onChange={(e)=>setNomAssoc(e.target.value)} type="text" name="NomAssoc" className={`${inputStyle}`} />
           </div>
           <div className={`${inputWrapper} `}>
             <span className={`${spanStyle}`}>Date de création :</span>
             <input type="date" name="DateCreation" className={`${inputStyle}`} onChange={(e)=>setdateCreation(e.target.value)} />
             <span> </span>
           </div>
           <div  className={`${inputWrapper}`} >
             <span className={`${spanStyle}`}>Ville :</span>
             <select onChange={(e)=>setville(e.target.value)}  className={`${inputStyle}`} name="Ville">
               {ListVilles}
             </select>
           </div>
           <div className='flex justify-between w-full'>
            
            <button  onClick={register}  className={`${buttonsStyle}  bg-green-500 rounded-br-mg w-1/2`}>register</button>
        </div>
         </div>
     </div>
   )
}

export default AssociationInfo