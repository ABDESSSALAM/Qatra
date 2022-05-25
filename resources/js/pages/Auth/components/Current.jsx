import React, { useContext } from 'react'
import Type from './Type'
import UserInfo from './UserInfo'
import VolontaireInfo from './VolontaireInfo'
import AssociationInfo from './AssociationInfo'
import CitoyenInfo from './CitoyenInfo'
import { RoleContext } from '../Register'


function Current(props) {
    let step=props.step;
    const {Role,setRole}=useContext(RoleContext);
    let Pages=[];
    if(Role==1){
      Pages=[<Type/>,<UserInfo/>,<CitoyenInfo/>];
    }else if(Role==2){
      Pages=[<Type/>,<UserInfo/>,<VolontaireInfo />]
    }else{
      Pages=[<Type/>,<UserInfo/>,<AssociationInfo />]
    }
   
    
  return (
    <>{Pages[step]}</>
  )
}

export default Current