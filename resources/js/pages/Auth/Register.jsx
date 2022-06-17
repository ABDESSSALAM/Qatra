import React,{useState,useEffect,createContext} from 'react'
import Progress from './components/Progress';
import axios_api from '../../CONF_AXIOS';
import Type from './components/Type';
import InfoUser from './components/UserInfo';
import CitoyenInfo from './components/CitoyenInfo';
import VolontaireInfo from './components/VolontaireInfo';
import AssociationInfo from './components/AssociationInfo';


export const RoleContext=createContext({
  Role:0,
  setRole:()=>{}
});




function Register() {
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";

  //step
  const [step,setStep]=useState(0);

  //role
  const [Role,setRole]=useState(0);
  const RoleValue={Role,setRole};
  


  const [villes,setVilles]=useState([])
  useEffect(()=>{
    axios_api.get('villes')
    .then(res=>setVilles(res.data))
    .catch(err=>console.log(err))
  },[])
  const [dataUser,setDataUser]=useState({})
  console.log("data :",dataUser)
  return (
    <>
      
      <form className='flex flex-col w-full h-97 '>
         <Progress step={step} />
      
         <RoleContext.Provider value={RoleValue}>
            {step==0 && <Type setStep={setStep} step={step} data={dataUser} setDataUser={setDataUser} />} 
            {step==1 && <InfoUser setStep={setStep} step={step} data={dataUser} setDataUser={setDataUser} />}
            {(step==2 && Role==1) && <CitoyenInfo   step={step} villes={villes} data={dataUser} setDataUser={setDataUser} /> }
            {(step==2 && Role==2) && <VolontaireInfo   step={step} villes={villes} data={dataUser} setDataUser={setDataUser} />}
            {(step==2 && Role==3) && <AssociationInfo  step={step}  villes={villes} data={dataUser} setDataUser={setDataUser} />}
         
         </RoleContext.Provider>
        
       
     
      </form>
    </>
  )
}

export default Register