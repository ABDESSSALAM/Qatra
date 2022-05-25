import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const useAuth=()=>{
  const user={login:true,role:2}

    return user && (user.login && (user.role==2 || user.role==1)) 
}
function Level2() {
  const isAuth=useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default Level2