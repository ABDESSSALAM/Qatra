import { createContext,useState } from "react";

export const UserContext=createContext({
    User:null,
    setUser:()=>{}
})

export const UserProvider=({children})=>{
    const [User,setUser]=useState(null);
    const contexValue={User,setUser};

    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

