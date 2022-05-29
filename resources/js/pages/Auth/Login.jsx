import React,{useContext,useState} from 'react'
import { UserContext } from '../../../Context/UserContext';
import MY_AXIOS from '../../components/API/MY_AXIOS';
const LOGIN_URL='/login';


function Login() {
  const inputStyle='text-lg outline-none rounded-md px-2 py-1';
  const {Luser,setUser}=useContext(UserContext)
  
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [err,setErr]=useState('');
  const [logged,setLogged]=useState(false);
  
  const data={
    email:email,
    password:pass
  }
 const  handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(data)
    try{
      const response= await MY_AXIOS.post(
        LOGIN_URL,
        JSON.stringify(data),
        {
          headers:{'Content-Type':'application/json'},
         
        });
        console.log(response.data.user)
        const token=response.data.token;
        const Role=response.data.role;
        setUser({Role,token})
        
        
          

      
      setLogged(true);
    }catch(err){
      if(err.response){
        console.log(error.response)
      }else if(err.request){
        console.log('request')
      }else if(err.message){
        console.log('message')
      }
    }
  }
  //chek
  if(logged){
    console.log(Luser);
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