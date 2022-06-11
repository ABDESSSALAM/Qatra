import React,{useContext,useState,useEffect} from 'react'
import { Navigate, } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import axios_api from '../../CONF_AXIOS';
import Cookies from 'universal-cookie';
function Login() {
  const inputStyle='text-lg outline-none rounded-md px-2 py-1';
  const {user,setUser}=useContext(UserContext)
  
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [err,setErr]=useState('');
  const [logged,setLogged]=useState(false);
  

   
 const  handleSubmit= async (e)=>{
    e.preventDefault();
    const data={
      'email':email,
      'password':pass
    }
    axios_api.post('login',data).then(res=>{
      if(res.data.message=='Success'){
        setUser(res.data.user);
        setLogged(true)
      }
    })
  }
  
  //chek
  if(logged){
    switch(user.role){
      case 3:
        // let date=new Date();
        // date.setTime(date.getTime()+(48*60*60*1000))
        // Cookies.set('id',user.id,date)


        //get association info

        //set cookies
        const d = new Date();
        d.setTime(d.getTime() + (4*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = 'idUser' + "=" + user.id + ";" + expires + ";path=/";
        
        
        return <Navigate to="/dashboard" />
    }

    return <Navigate to={`/profile/${user.id}`} />
  }
  return (
   
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-stretch justify-around px-4 bg-primary'>
          <input className={inputStyle} type="text" name='email' placeholder='votre adress email' required onChange={(e)=>{setEmail(e.target.value)}} />
          <input className={inputStyle} type="password" name="password" placeholder='mot de pass' required  onChange={(e)=>{setPass(e.target.value)}}/>
          <input className='bg-green-600 text-white font-semibold text-2xl rounded-3xl cursor-pointer py-1' type="submit" value="connecter" />
        </form>
  )
}

export default Login