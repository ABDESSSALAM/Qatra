import { createContext,useState } from "react";

export const UserContext=createContext({
    User:{},
    setUser:()=>{}
})

export const UserProvider=({children})=>{
    const [user,setuser]=useState({email:'',pass:''});

    const contexValue={
        User:user,
        setUser:setuser
    };

    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

