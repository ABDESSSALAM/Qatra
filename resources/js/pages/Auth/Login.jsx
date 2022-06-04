import React,{useContext,useState,useEffect} from 'react'
import { Navigate, } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import axios_api from '../../CONF_AXIOS';

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
    


    // try{
    //   const response= await MY_AXIOS.post(
    //     LOGIN_URL,
    //     JSON.stringify(
    //       {
    //        email:email,
    //       password:pass}
    //       ),
    //     {
    //       headers:{'Content-Type':'application/json'},
    //     });
    //     console.log(response.data.user)
    //     console.log(response.data.token)
    //     setUser({
    //       nom:response.data.user.nom,
    //       prenom:response.data.user.prenom,
    //       email:response.data.user.email,
    //       role:response.data.user.role,
    //       token:response.data.token,
    //       id:response.data.user.id,
    //       isAuth:true
    //     })
        
    //     setLogged(true);
    // }catch(err){
    //   setErr(err)
    //   if(err.response){
    //     console.log(error.response)
    //   }else if(err.request){
    //     console.log('request')
    //   }else if(err.message){
    //     console.log('message')
    //   }
    // }  
    
    
  }
  
  //chek
  if(logged){
    
    return <Navigate to="/" />
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