import React from 'react';
import { useAuth } from '../utilities/use-auth';
import { useForm } from '../utilities/use-form';
import authService from '../services/auth';
import { Input, Container, PageHeader } from '../components';

interface RegisterProps { }

const Register = (props: RegisterProps) => {
    const { signin } = useAuth();

    const { values, handleChanges } = useForm<{ [key: string]: string }>({
        // "email": "nowy_zbigniew@gmail.com",
        // "password": "password123",
        // "first_name": "Zbigniew",
        // "last_name": "Nowy",
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        authService
            .registerUser(values)
            .then(response => signin('/profile'))
            .catch(err => console.log(err.message));
        console.log(values);
    }

    return (
        <Container className='p-8'>
            <PageHeader>Register</PageHeader>
            <div className='flex flex-wrap items-center justify-center full-w'>
                <form className='flex flex-wrap items-center justify-center max-w-5xl mt-6 lg:gap-4' autoComplete='off' action="">
                    <div className="w-full max-w-md mb-2 form-control">
                        <label className='label-text' htmlFor="email">Email</label>
                        <Input
                            name="email"
                            id="email"
                            autoComplete="current-email"
                            type="email"
                            value={values?.email || ''}
                            onChange={handleChanges}
                            variant='primary'
                        />
                    </div>
                    <div className="w-full max-w-md mb-2 form-control">
                        <label className='label-text' htmlFor="password">Password</label>
                        <Input
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            onChange={handleChanges}
                            value={values?.password || ''}
                            variant='primary'
                        />
                    </div>
                    <div className="w-full max-w-md mb-2 form-control">
                        <label className='label-text' htmlFor="first_name">First Name</label>
                        <Input
                            name="first_name"
                            id="first_name"
                            autoComplete="current-first-name"
                            type="text"
                            onChange={handleChanges}
                            value={values?.first_name || ''}
                            variant='primary'
                        />
                    </div>
                    <div className="w-full max-w-md mb-2 form-control">
                        <label className='label-text' htmlFor="last_name">Last Name</label>
                        <Input
                            name="last_name"
                            id="last_name"
                            autoComplete="current-last-name"
                            type="text"
                            onChange={handleChanges}
                            value={values?.last_name || ''}
                            variant='primary'
                        />
                    </div>
                    <div className="flex items-center w-full max-w-md mt-6 form-control">
                        <button className='btn btn-primary btn-wide' onClick={handleClick}>Register</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Register;