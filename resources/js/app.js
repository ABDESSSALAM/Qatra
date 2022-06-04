import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import View from './View';
import { UserProvider } from '../Context/UserContext';

function App() {
    
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
