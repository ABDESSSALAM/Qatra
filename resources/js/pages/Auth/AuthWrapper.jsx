import React,{useState} from 'react'
import HomeLayout from '../Home/Components/HomeLayout'
import Login from './Login'
import Register from './Register'
function AuthWrapper() {
    const [active,setAcive]=useState(0);
  return (
    <HomeLayout>
        <div className='w-full h-98  mt-5 flex flex-col justify-center items-center text-white bg-primary'>
            <div className="flex w-1/2 h-10 bg-green-500 mt-5 rounded-t-lg shadow-lg">
                <span className={`${active==1 && 'bg-green-600'} w-1/2 py-2 px-1 rounded-tl-lg`} onClick={()=>{setAcive(0)}}>Login</span>
                <span className={`${active==0 && 'bg-green-600'} w-1/2 py-2 px-1 rounded-tr-lg `} onClick={()=>{setAcive(1)}}>Register</span>
            </div>
            <div className={`${active==0?'h-64' : 'h-96'} w-1/2 bg-green-500 mb-5 text-black px-3 py-5 flex flex-col items-center justify-center shadow-xl rounded-b-lg`}>
                {active==0 ? <Login /> :<Register /> } 
                 {/*  */}
            </div>
           
        </div>
    </HomeLayout>
  )
}

export default AuthWrapper