import React, { useState } from 'react';
import authService from '../services/auth';
import { useAuth } from '../utilities/use-auth';

interface RegisterProps { }

const Register = (props: RegisterProps) => {
    const { signIn } = useAuth();
    const [values, setValues] = useState<{ [key: string]: string }>({
        "email": "nowy_zbigniew@gmail.com",
        "password": "password123",
        "first_name": "Zbigniew",
        "last_name": "Nowy",
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

        authService.registerUser(values)
            .then(response => signIn('/profile'))
            .catch(err => console.log(err.message));
        console.log(values);

    }
    return (
        <div>
            <h1>Register View</h1>
            <div>
                <form autoComplete='off' action="">
                    <input
                        name="email"
                        autoComplete="current-email"
                        type="email"
                        value={values.email || ''}
                        onChange={handleChanges}
                    />
                    <input
                        name="password"
                        autoComplete="current-password"
                        type="password"
                        onChange={handleChanges}
                        value={values.password || ''}
                    />
                    <input
                        name="first_name"
                        autoComplete="current-first-name"
                        type="text"
                        onChange={handleChanges}
                        value={values.first_name || ''}
                    />
                    <input
                        name="last_name"
                        autoComplete="current-last-name"
                        type="text"
                        onChange={handleChanges}
                        value={values.last_name || ''}
                    />

                    <button onClick={handleClick} type="submit">Register</button>
                    {/* {error && <div>Error happened, wrong credentials</div>} */}
                </form>
            </div>

        </div>
    )
}

export default Register;