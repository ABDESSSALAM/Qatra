import React,{useContext, useState} from 'react'
import { VolontaireContext } from '../Register';


function VolontaireInfo(props) {
  //styling
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
   
  // data
  const Villes=props.villes;
    const ListVilles=Villes.map((ville)=><option key={ville.id} value={ville.id} >{ville.nomVille}</option>)
  const groupSang=[' ','A+','A-','B+','B-','AB+','AB-','O+','O-'];
  const ListGroupSang=groupSang.map((sg,idx)=><option key={idx} value={sg}>{sg}</option>)
  
  //style
  const inputWrapper="flex mx-auto w-10/12   justify-around my-3";
  const inputStyle="w-8/12 outline-none rounded-md px-3 text-lg";
  const spanStyle="w-4/12 text-white text-xl";

  const [CIN,setCIN]=useState('')
  const [ville,setville]=useState('')
  const [sangV,setsangV]=useState('')
  const register=(e)=>{
    e.preventDefault();
    //validation

    let data=props.data;
    const newData={
      CIN:CIN,
      ville:ville,
      SangV:sangV,
    }
    data={...data,...newData};
    props.setDataUser(data)
    console.log(data)
      //send data to server
  }
  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center  shadow-lg cursor-pointer h-72'>
        <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
            <h3 className='text-white text-6xl mr-11'>Volontaire</h3>
            <i className="fa-solid fa-hand-holding-medical text-white text-7xl"></i>
        </div>
        <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
          <div className={`${inputWrapper} `}>
            <span className={`${spanStyle}`}>CIN :</span>
            <input type="text" name="CIN" onChange={(e)=>setCIN(e.target.value)} className={`${inputStyle}`} />
          </div>
          <div  className={`${inputWrapper}`} >
            <span className={`${spanStyle}`}>Ville :</span>
            <select className={`${inputStyle}`} name="Ville" onChange={(e)=>setville(e.target.value)}>
              {ListVilles}
            </select>
          </div>
          <div className={`${inputWrapper}`} >
            <span className={`${spanStyle} text-lg`}>Sanguin group :</span>
            <select className={`${inputStyle}`} name="SangV" onChange={(e)=>setsangV(e.target.value)}>
              {ListGroupSang}
            </select>
            
          </div>
          <div className='flex justify-between w-full'>
           
            <button  onClick={register} className={`${buttonsStyle}  bg-green-800 rounded-br-mg w-1/2`}>register</button>
        </div>
        </div>
       
    </div>
  )
}

export default VolontaireInfo