import React, {useContext,useState } from 'react'
import Card from './Card'
import { RoleContext } from '../Register';


function Type(props) {
  const {Role,setRole}=useContext(RoleContext);  
  let step=props.step;
  let data=props.data;
  const [err,setErr]=useState('')
  
  const next=(e)=>{
    e.preventDefault()
    if(Role==0){
      setErr('tu peut selectioner le type d\'inscription s\'il vous plait ')
      return;
    }
    const newData={role:Role}
    data={...data, ...newData}

    props.setDataUser(data)
    
    props.setStep(step+1);
  }
  
  const isDemande =()=>{
    setRole(1)
  }
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
  let Border= (Role ==1) ? "border-4  border-gray-300 " : ""
  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center justify-between shadow-lg cursor-pointer  h-92 '> 
        {err != '' && <span className='text-red-600'>{err}</span> } 
        <h3 className='text-white font-semibold text-4xl uppercase'>Inscription</h3>
        <div className="flex my-2">
           <Card who="Volontaire" idx={2}  icon="fa-hand-holding-medical"    />
          <Card who="Association" idx={3}  icon="fa-hospital-user " />
        </div>
        <p className='text-white text-lg'>pour les demandes de sang <span onClick={isDemande}  className={`${Border}  bg-white text-green-700 px-4 font-semibold  rounded-lg shadow-2xl underline `}>ici</span> </p>
        <div className='flex flex-col justify-between  items-center w-full'>
            {/* <button onClick={prev} disabled className={`${buttonsStyle}  bg-secondary  rounded-bl-md w-1/2`}>prev</button> */}
            <button onClick={next}  className={`${buttonsStyle}  bg-green-500 rounded-lg  w-1/2`}>suivant</button>
          </div>
    </div>
  )
}

export default Type