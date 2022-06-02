import React,{useState,createContext,useReducer} from 'react'
import Progress from './components/Progress';
import Current from './components/Current';


export const ACTIONS={
  ADD_USER_INFO:'ADD_USER_INFO',
  ADD_VOLONTAIRE_INFO:'ADD_VOLONTAIRE_INFO',
  ADD_ASSOCIATION_INFO:'ADD_ASSOCIATION_INFO',
  ADD_CITOYEN_INFO:'ADD_CITOYEN_INFO',
}

function reducer(data,action){
  switch(action.type){
    case ACTIONS.ADD_USER_INFO :
      return {...data,...action.payload.user};
    case ACTIONS.ADD_CITOYEN_INFO:
      return {...data,...action.payload.citoyen};
    case ACTIONS.ADD_VOLONTAIRE_INFO:
      return {...data,...action.payload.volontaire};
    case ACTIONS.ADD_ASSOCIATION_INFO:
      return {...data,...action.payload.association};
    default:
      console.log('err');
  }

}


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
    ville:'',
    SangV:'',
  },
  setVolontaireInfo:()=>{}
})

export const DemandeContext=createContext({
  Demande:{
    CIN:'',
    ville:'',
    hospitale:'',
    sangP:'',
  },
  setDemandeInfo:()=>{}
})

export const AssociationContext=createContext({
  Association:{
    NomAssoc:'',
    ville:'',
    DateCreation:'',
  },
  setAssociationInfo:()=>{}
})



function Register() {
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
  const [data,dispatch]=useReducer(reducer,{});
  //step
  const [step,setStep]=useState(0);
  const [txtNext,setTxtNext]=useState('suivant');
  //role
  const [Role,setRole]=useState(0);
  const RoleValue={Role,setRole};

  //navigation between steps
  const prev=(e)=>{
    e.preventDefault();
    if(step>0){
      setStep(step-1);
    }
    if(step!=1){
      setTxtNext('next')
    }
  }
  const next=(e)=>{
    e.preventDefault();
    if(Role==0){
      alert('who are you??')
      return
    }
    if(step<=2){
      if(step==1){
        console.log('step 1')
        console.log(UserInfo)
        dispatch({type:ACTIONS.ADD_USER_INFO,payload:{user:UserInfo}})
        
        
      }
       if(step==2){
        console.log('step est 2')
        switch(Role){
          case 1:
          dispatch({type:ACTIONS.ADD_CITOYEN_INFO,payload:{citoyen:DemandeInfo}})
          break;
          case 2:
            dispatch({type:ACTIONS.ADD_VOLONTAIRE_INFO,payload:{volontaire:VolontaireInfo}})
            break;
          case 3:
            dispatch({type:ACTIONS.ADD_ASSOCIATION_INFO,payload:{association:AssociationInfo}})
            break;
        }
        //sent request to server
       
        console.log(data)

      } 
      if(step<2){
          setStep(step+1);
        }
     
      console.log(step)
    }
    if(step==1){
      setTxtNext('submit')
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
      
      <form className='flex flex-col w-full '>
         <Progress step={step} />
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
            <button onClick={next}  className={`${buttonsStyle}  bg-green-500 rounded-br-mg w-1/2`}>{txtNext}</button>
          </div>
        </RoleContext.Provider>  
     
      </form>
    </>
  )
}

export default Register