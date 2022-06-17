import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const useAuth=()=>{
    const {user}=useContext(UserContext)
    const test= (user.role==2 || user.role==1);
    console.log(test)
    return user &&  (user.role==2 || user.role==1)
}
function Level2() {
  const isAuth=useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/login" />
}


export default Level2