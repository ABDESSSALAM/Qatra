import React,{useContext,useState} from 'react'
import { UserInfoContext } from '../Register';


function UserInfo() {
    const {UserInfo,setUserInfo}=useContext(UserInfoContext);
    
    const HandleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      switch(name){
        case "Fname":
          setUserInfo({
            Fname:value,
            Lname:UserInfo.Lname,
            Email:UserInfo.Email,
            Pass:UserInfo.Pass,
            Pass_Conf:UserInfo.Pass_Conf,
            Telephone:UserInfo.Telephone,
          }
          )
        break
        
        case "Lname":
          setUserInfo({
            Fname:UserInfo.Fname,
            Lname:value,
            Email:UserInfo.Email,
            Pass:UserInfo.Pass,
            Pass_Conf:UserInfo.Pass_Conf,
            Telephone:UserInfo.Telephone,
          }
          )
        break
        
        case "Email":
          setUserInfo({
            Fname:UserInfo.Fname,
            Lname:UserInfo.Lname,
            Email:value,
            Pass:UserInfo.Pass,
            Pass_Conf:UserInfo.Pass_Conf,
            Telephone:UserInfo.Telephone,
          }
          )
        break
        
        case "Pass":
          setUserInfo({
            Fname:UserInfo.Fname,
            Lname:UserInfo.Lname,
            Email:UserInfo.Email,
            Pass:value,
            Pass_Conf:UserInfo.Pass_Conf,
            Telephone:UserInfo.Telephone,
          }
          )
        break
        
        case "Pass_Conf":
          setUserInfo({
            Fname:UserInfo.Fname,
            Lname:UserInfo.Lname,
            Email:UserInfo.Email,
            Pass:UserInfo.Pass,
            Pass_Conf:value,
            Telephone:UserInfo.Telephone,
          }
          )
        break
        
        case "Telephone":
          setUserInfo({
            Fname:UserInfo.Fname,
            Lname:UserInfo.Lname,
            Email:UserInfo.Email,
            Pass:UserInfo.Pass,
            Pass_Conf:UserInfo.Pass_Conf,
            Telephone:value,
          }
          )
        break
        

      }
      console.log(UserInfo)
    }

    const inputStyle=" rounded-md px-3 text-xl outline-none py-1";
  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center justify-between shadow-lg cursor-pointer h-80'>
        <div className='w-full h-full flex flex-col px-3 items-stretch justify-between py-3'>
        <div className='flex justify-between'>
            <input type="text" onChange={HandleInput}  name='Fname' placeholder='Nom' className={`${inputStyle} w-2/5`} />
            <input type="text" onChange={HandleInput} name="Lname" placeholder='Prénom' className={`${inputStyle} w-2/5`}/>
        </div>
        <input type="email" onChange={HandleInput} name='Email' placeholder='Email' className={`${inputStyle}`}/>
        <input type="password" onChange={HandleInput} name="Pass" placeholder='Mot de pass' className={`${inputStyle}`} />
        <input type="password" onChange={HandleInput} name="Pass_Conf" placeholder='Confirmez mot de pass' className={`${inputStyle}`} />
        <input type="text" onChange={HandleInput} name="Telephone" placeholder='Téléphone' className={`${inputStyle}`}/>
        </div>
        
    </div>
  )
}

export default UserInfo