import { useEffect, useState } from 'react';
import { signUp } from '../utils/userUtils';

export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     console.log(firstName, lastName, email, password)
    // }, [firstName, lastName, email, password])

    return (
        <div className="menu page-content">
            <div>
                <h1>Sign Up:</h1>
                <form
                    onSubmit={(e) => [
                        e.preventDefault(),
                        signUp(firstName, lastName, email, password),
                        setFirstName(''),
                        setLastName(''),
                        setEmail(''),
                        setPassword(''),
                    ]}
                    className="signup"
                >
                    <input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Sign-Up" />
                </form>
            </div>
        </div>
    );
};
