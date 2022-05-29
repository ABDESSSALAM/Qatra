import React,{useContext,useState} from 'react'
import { UserContext } from '../../../Context/UserContext';

function Login() {
  const inputStyle='text-lg outline-none rounded-md px-2 py-1';
  const {user,setUser}=useContext(UserContext);
  //const [UserInfo,setUserInfo]=useState({});
 
 const  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
   
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-stretch justify-around px-4 bg-primary'>
          <input className={inputStyle} type="text" name='password' placeholder='votre adress email' />
          <input className={inputStyle} type="password" name="password" placeholder='mot de pass' />
          <input className='bg-green-600 text-white font-semibold text-2xl rounded-3xl cursor-pointer py-1' type="submit" value="connecter" />
        </form>
  )
}

export default Login