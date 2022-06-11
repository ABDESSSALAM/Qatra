import React,{ useState} from 'react'
import axios_api from '../../../CONF_AXIOS';
function CitoyenInfo(props) {
    //styling
    const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
    //data
    const Villes=props.villes;
    const ListVilles=Villes.map((ville)=><option key={ville.id} value={ville.id} >{ville.nomVille}</option>)
    const groupSang=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
    const ListGroupSang=groupSang.map((sg,idx)=><option key={idx} value={sg}>{sg}</option>)
    //style
    const inputWrapper="flex mx-auto w-10/12   justify-around my-1";
    const inputStyle="w-8/12 outline-none rounded-md px-2 text-lg";
    const spanStyle="w-4/12 text-white text-xl";

    const [CIN,setCIN]=useState('')
    const [ville,setville]=useState('')
    const [hospitale,sethospitale]=useState('')
    const [sangP,setsangP]=useState('')
       


    //handle clicks
    let step=props.step;
    const prev=(e)=>{
      e.preventDefault();
      props.setStep(step-1);
    }
    const register = async (e)=>{
      e.preventDefault();

      //validation
      let data=props.data;
      const newData={
        CIN:CIN,
        sangP:sangP,
        hospitale:hospitale,
        ville:ville
      }
      data={...data,...newData};
      props.setDataUser(data)
      //send data to server
      await await axios_api.post('register',data)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    }


 return (
   <div className='w-full bg-primary px-4 py-2 flex flex-col items-center  shadow-lg cursor-pointer h-80'>
       <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
           <h3 className='text-white text-4xl mr-5'>Demande de sang</h3>
           <i className="fa-solid fa-truck-medical text-white text-7xl"></i>
       </div>
       <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
         <div className={`${inputWrapper} `}>
           <span className={`${spanStyle}`}>CIN :</span>
           <input onChange={(e)=>setCIN(e.target.value)}  type="text" name="CIN" className={`${inputStyle}`} />
         </div>
         <div className={`${inputWrapper} `}>
           <span className={`${spanStyle}`}>Hospitale :</span>
           <input onChange={(e)=>sethospitale(e.target.value)} type="text" name="Hospitale" className={`${inputStyle}`} />
         </div>
         <div  className={`${inputWrapper}`} >
           <span className={`${spanStyle}`}>Ville :</span>
           <select className={`${inputStyle}`} name="Ville" onChange={(e)=>setville(e.target.value)} >
             {ListVilles}
           </select>
         </div>
         <div className={`${inputWrapper}`} >
           <span className={`${spanStyle} text-lg`}>Sanguin group :</span>
           <select className={`${inputStyle}`} name="SangP" onChange={(e)=>setsangP(e.target.value)} >
             {ListGroupSang}
           </select>
         </div>
       </div>
       <div className='flex justify-between w-full'>
            
            <button onClick={register}  className={`${buttonsStyle}  bg-green-500 rounded-br-mg w-1/2`}>register</button>
        </div>
   </div>
 )
}

export default CitoyenInfo