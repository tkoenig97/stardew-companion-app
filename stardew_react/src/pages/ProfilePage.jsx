import { useContext } from 'react';
import { UserContext } from '../App';
import { capitalizeFirstLetter } from '../utils/generalUtils';
import { logOut } from '../utils/userUtils';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()

    return (
        <div className="menu page-content">
            <h1>
                Welcome Back {user && capitalizeFirstLetter(user.first_name)}!
            </h1>
            <button onClick={() => logOut(setUser, navigate)}>Log Out</button>
        </div>
    );
};
