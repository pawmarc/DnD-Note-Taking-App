import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import authService from '../services/auth';
import { useAuth } from '../utilities/use-auth';

interface LoginProps {

}

const Login = (props: LoginProps) => {

    const location = useLocation();
    const { signIn } = useAuth();
    const [error, setError] = useState<string>('');
    const [loggedIn, setLoggedIn] = useState(false);

    const [values, setValues] = useState<{ [key: string]: string }>({
        "email": "adam_mickiewicz@gmail.com",
        "password": "password123"
    });


    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        authService.loginUser(values)
            .then((res) => signIn('/profile'))
            .catch(e => setError(`${e.message}`));

    }


    return (
        <div>
            <h1>Login Page</h1>
            {loggedIn ? <div>User is logged in!</div> : ''}
            {location.state?.message && <div>{location.state?.message}</div>}
            <div>
                <form action="">
                    <input name="email" autoComplete="current-email" type="email" value={values.email || ''} onChange={handleChanges} />
                    <input name="password" autoComplete="current-password" type="password" onChange={handleChanges} value={values.password || ''} />
                    <button onClick={handleClick} type="submit">Login</button>
                    {error && <div>Error happened, wrong credentials</div>}
                </form>
            </div>
        </div>
    )
}

export default Login;