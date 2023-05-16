import { createContext, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { getToken, currUser, logOut } from './utils/userUtils';
import './App.css';

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    getToken();

    useEffect(() => {
        const getCurrUser = async () => {
            setUser(await currUser());
        };
        getCurrUser();
    }, []);

    useEffect(() => {
      console.log(user)
    }, [user])

    return (
        <div className="app">
            <Navbar />
            <UserContext.Provider value={{ user, setUser }}>
                <h1>Hello {user && user.email}</h1>
                <button onClick={() => logOut(setUser)}>Log Out</button>
                <Outlet />
            </UserContext.Provider>
        </div>
    );
}

export default App;
