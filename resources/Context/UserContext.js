import { createContext,useState } from "react";

export const UserContext=createContext({
    
})

export const UserProvider=({children})=>{
    const [user,setuser]=useState({});

    const contexValue={
       user,setuser
    };

    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

