import axios from "./CONF_AXIOS";

export const useAuth=()=>{
    const csrf=()=>axios.get('/sanctum/csrf-cookie');
    
}