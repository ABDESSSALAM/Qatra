import {  Outlet, Route,Routes } from "react-router-dom";
import React,{useState} from 'react'
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Carnaval from "./pages/Dashboard/Carnaval";
import Volontaire from "./pages/Dashboard/Volontaire";
import Urgences from "./pages/Dashboard/Urgences";
import Association from "./pages/Dashboard/Association";
import Statistics from "./pages/Dashboard/Statistics";
import Level2 from "./ProtectedRoutes/Level2";
import SideBar from "./components/Dashboard/SideBar";
import Navbar from './components/Dashboard/Navbar';


function View() {
    const [open,setopen]=useState(true);
    const toggleOpen=()=>{
        setopen(!open)
    }
  return (
    <Routes>
        {/* public router */}
        <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            {/* user role 2 router */}
            
            <Route element={<Level2/>}>
                <Route path="profile" >
                    <Route path=":id" element={<Profile/>}/>
                </Route>
            </Route>
            
            {/* user role 3 and 4 routers */}
            <Route path="dashboard" element={
                <>
                
                <Dashboard>
                    <div className={`${open ? 'w-1/5' :'w-1/12'}  flex flex-col h-screen bg-primary relative py-3 transition-width ease-in-out duration-500 shadow-lg`}>
                    
                    <SideBar isOpen={open} toggleOpen={toggleOpen} />
                </div>
                <div className={`${open ? 'w-4/5' : 'w-11/12'} flex flex-col `} >
                    <Navbar />
                    <main className='h-5/6 px-4 py-2'><Outlet/></main>
                </div>
                    
                    </Dashboard>
                </>
            
            }>
                
                <Route  path="volontaire"  element={<Volontaire/>}/> 
                <Route  path="uregence"  element={<Urgences/>}/> 
                <Route path="carnaval" element={<Carnaval/>}/>  
                <Route path="association" element={<Association/>}/>  
                <Route path="statistic" element={<Statistics/>}/>  
            </Route>  
        </Route>
        

        {/* 404 not found */}
        <Route path="*" element={<h2>404 not found</h2>}/>
        {/* 
            redirect
        <Navigate to="/login" /> */}
    </Routes>
  )
}

export default View