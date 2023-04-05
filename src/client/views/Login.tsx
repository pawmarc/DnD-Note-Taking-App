import React, { useState } from "react";

interface LoginProps {

}

const Login = (props: LoginProps) => {

    const [values, setValues] = useState<{ [key: string]: string }>({
        "email": "adam_mickiewicz@gmail.com",
        "password": "password123"
    });

    let token = '';

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        console.log(values);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = fetch('/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(res => {
                // if (!res.ok) {
                //     throw new Error('bad request!');
                // }
                return res.json();
            })
            .then(data => {
                localStorage.setItem('token', data.token)
            })
            .catch(e => console.log('[error]:', e.message));
    }
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <form action="">
                    <input name="email" autoComplete="current-email" type="email" value={values.email || ''} onChange={handleChanges} />
                    <input name="password" autoComplete="current-password" type="password" onChange={handleChanges} value={values.password || ''} />
                    <button onClick={handleClick} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;