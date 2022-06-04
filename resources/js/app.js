import React,{useContext,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import View from './View';
import { UserProvider } from '../Context/UserContext';
import { UserContext } from '../Context/UserContext';
import axios_api from './CONF_AXIOS';
function App() {
    const {user,setUser}=useContext(UserContext);
    useEffect(()=>{
        axios_api.get('user').
        then(res=>{
            if(res.status==200){
                setUser(res.data);
            }
        })

    },[])
    return (
        <BrowserRouter>
        <UserProvider>
            <View />
        </UserProvider>  
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
