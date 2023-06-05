import { createContext, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { getToken, currUser } from './utils/userUtils';
import './App.css';

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);
    const isAuthenticated = !!user

    getToken();

    useEffect(() => {
        const getCurrUser = async () => {
            setUser(await currUser());
        };
        getCurrUser();
    }, []);

    return (
        <div className="app">
            <Navbar isAuthenticated={isAuthenticated}/>
            <UserContext.Provider value={{ user, setUser }}>
                <Outlet />
            </UserContext.Provider>
        </div>
    );
}

export default App;
