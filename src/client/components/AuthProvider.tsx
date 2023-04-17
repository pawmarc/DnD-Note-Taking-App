import React, { createContext, useEffect, useState } from 'react'
import authService from '../services/auth';

import LoaderCard from './LoaderCard';

const AuthContext = createContext<[{ authenticated: boolean, checking: boolean }, React.Dispatch<React.SetStateAction<{ authenticated: boolean, checking: boolean }>>]>([{
    authenticated: false,
    checking: true,
}, () => { }]);

interface AuthProviderProps {
    children: React.ReactNode,
}

export default function AuthProvider(props: AuthProviderProps) {

    const [authState, setAuthState] = useState({
        authenticated: false,
        checking: true,
    })

    useEffect(() => {
        authService.validateToken()
            .then(() => {
                setTimeout(() => (
                    setAuthState({
                        authenticated: true,
                        checking: false
                    })
                ), 2000)
            })
            .catch((err) => {
                setAuthState({
                    authenticated: false,
                    checking: false
                })
            })

    }, [])


    {
        if (authState.checking) {
            return (<LoaderCard length={3} />)
        }

        return (<AuthContext.Provider value={[authState, setAuthState]}> {props.children}</AuthContext.Provider >

        )
    }
}

export {
    AuthContext
}