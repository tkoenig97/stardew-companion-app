import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../utils/userUtils';
import { UserContext } from '../App';

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Log In:</h1>
            <form
                className="signup"
                onSubmit={async(e) => [
                    e.preventDefault(),
                    setUser(await logIn(email, password)),
                    setEmail(''),
                    setPassword(''),
                ]}
            >
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Log In" />
                <p>
                    Don't have an account? <Link to={'/signup'}>Sign-Up!</Link>
                </p>
            </form>
        </div>
    );
};
