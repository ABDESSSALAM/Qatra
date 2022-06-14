import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const useAuth=()=>{
    const {user}=useContext(UserContext)
  
    return user &&  (user.role==4 || user.role==5)
}
function Level3() {
  const isAuth=useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/" />
}


export default Level3