import { createContext,useState } from "react";

export const UserContext=createContext({
  user:{
    //   nom:'',
    //   prenom:'',
    //   email:'',
    //   role:0,
    //   token:'',
    //   isAuth:false
  },
  setUser:()=>{}      
})

export const UserProvider=({children})=>{
    const [user,setUser]=useState({});

    const contexValue={
       user,setUser
    };

    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

