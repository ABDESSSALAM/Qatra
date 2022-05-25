import React, {useContext } from 'react'
import Card from './Card'
import { RoleContext } from '../Register';


function Type() {
  const {Role,setRole}=useContext(RoleContext);  
  const isDemande =()=>{
    setRole(1)
  }
  let Border= (Role ==1) ? "border-4  border-gray-300 " : ""
  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center justify-between shadow-lg cursor-pointer  h-72 '> 
        
        <h3 className='text-white font-semibold text-4xl uppercase'>Inscription</h3>
        <div className="flex my-2">
           <Card who="Volontaire" idx={2}  icon="fa-hand-holding-medical"  />
          <Card who="Association" idx={3}  icon="fa-hospital-user " />
        </div>
        <p className='text-white text-lg'>pour les demandes de sang <span onClick={isDemande}  className={`${Border}  bg-white text-green-700 px-4 font-semibold  rounded-lg shadow-2xl underline `}>ici</span> </p>
       
    </div>
  )
}

export default Type