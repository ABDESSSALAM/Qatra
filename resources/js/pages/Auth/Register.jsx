import React,{useState,createContext} from 'react'
import Progress from './components/Progress';
import Current from './components/Current';


export const RoleContext=createContext({
  Role:0,
  setRole:()=>{}
});


export const UserInfoContext=createContext({
  User:{
    Fname:'',
    Lname:'',
    Email:'',
    Pass:'',
    Pass_Conf:'',
    Telephone:'',},
  setUserInfo :()=>{}
})

export const VolontaireContext=createContext({
  Volontaire:{
    CIN:'',
    Ville:'',
    SangV:'',
  },
  setVolontaireInfo:()=>{}
})

export const DemandeContext=createContext({
  Demande:{
    CIN:'',
    Ville:'',
    Hospitale:'',
    SangP:'',
  },
  setDemandeInfo:()=>{}
})

export const AssociationContext=createContext({
  Association:{
    NomAssoc:'',
    Ville:'',
    DateCreation:'',
  },
  setAssociationInfo:()=>{}
})



function Register() {
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
 
  //step
  const [step,setStep]=useState(0);
 
  //role
  const [Role,setRole]=useState(0);
  const RoleValue={Role,setRole};

  //navigation between steps
  const prev=(e)=>{
    e.preventDefault();
    if(step>0){
      setStep(step-1);
    }
  }
  const next=(e)=>{
    e.preventDefault();
    if(step<2){
      setStep(step+1);
    }
  }

  
  //changing last step depends on role
  
  //to insert data to db

  //user 
  const [UserInfo,setUserInfo]=useState({
    Fname:'',
    Lname:'',
    Email:'',
    Pass:'',
    Pass_Conf:'',
    Telephone:'',
  })

  const UserInfoValue={UserInfo,setUserInfo};
 

  //volontaire
  const [VolontaireInfo,setVolontaireInfo]=useState({
    CIN:'',
    Ville:'',
    SangV:'',
  })

  const VolontaireInfoValues={VolontaireInfo,setVolontaireInfo};
  //Demande
  const [DemandeInfo,setDemandeInfo]=useState({
    CIN:'',
    Ville:'',
    Hospitale:'',
    SangP:'',
  })

  const DemandeInfoValue={DemandeInfo,setDemandeInfo};
  
  //Association
  const [AssociationInfo,setAssociationInfo]=useState({
    NomAssoc:'',
    Ville:'',
    DateCreation:'',
    
  })
  const AssociationInfoValue={AssociationInfo,setAssociationInfo};

  return (
    <>
       <Progress step={step} />
      <form className='flex flex-col w-full  '>
      <RoleContext.Provider value={RoleValue}>


        <UserInfoContext.Provider value={UserInfoValue}>
        <VolontaireContext.Provider value={VolontaireInfoValues}>
        <DemandeContext.Provider value={DemandeInfoValue}>
        <AssociationContext.Provider value={AssociationInfoValue}>
            <Current  step={step} />
        </AssociationContext.Provider>
        </DemandeContext.Provider>
        </VolontaireContext.Provider>
        </UserInfoContext.Provider>
         
          <div className='flex justify-between w-full'>
            <button onClick={prev} className={`${buttonsStyle}  bg-secondary  rounded-bl-md w-1/2`}>prev</button>
            <button onClick={next}  className={`${buttonsStyle}  bg-green-500 rounded-br-mg w-1/2`}>next</button>
          </div>
        </RoleContext.Provider>  
     
      </form>
    </>
  )
}

export default Register