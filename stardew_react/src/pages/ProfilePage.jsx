import { useContext } from 'react';
import { UserContext } from '../App';
import { capitalizeFirstLetter } from '../utils/generalUtils';

export const ProfilePage = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="menu page-content">
            <h1>
                Welcome Back {user && capitalizeFirstLetter(user.first_name)}!
            </h1>
            <img
                className="index-img"
                src="src/assets/images/brown-chicken.png"
            />
        </div>
    );
};
