import { useContext } from 'react';
import { UserContext } from '../App';
import { capitalizeFirstLetter } from '../utils/generalUtils';
import { logOut } from '../utils/userUtils';

export const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="menu page-content">
            <h1>
                Welcome Back {user && capitalizeFirstLetter(user.first_name)}!
            </h1>
            <button onClick={() => logOut(setUser)}>Log Out</button>
        </div>
    );
};
