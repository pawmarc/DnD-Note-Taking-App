import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authService from '../services/auth';

interface LoginProps {

}

const Login = (props: LoginProps) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [values, setValues] = useState<{ [key: string]: string }>({
        "email": "adam_mickiewicz@gmail.com",
        "password": "password123"
    });
    const [error, setError] = useState<string>('');


    const location = useLocation();
    const navigate = useNavigate();

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
            .then((res) => navigate('/private'))
            .catch(e => setError(`${e.message}`));

        // const result = fetch('/auth/login', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(values)
        // })
        //     .then(res => {
        //         if (!res.ok) {
        //             throw new Error('bad request!');
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
        //         localStorage.setItem('token', data.token)
        //     })
        //     .catch(e => console.log('[error]:', e.message));
    }

    useEffect(() => {
        const token = localStorage.token;
        if (!token) {
            return;
        }
        fetch('/auth/validate/me', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    setLoggedIn(true);
                }
                else {
                    setLoggedIn(false);
                }
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <h1>Login Page</h1>
            {loggedIn ? <div>User Logged in!</div> : ''}
            {location.state?.from === '/private' && <div>Redirected from private!</div>}
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