import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import storage from '../utilities/storage';

import { Toast } from "../components";

export const useAuth = () => {
    const [authState, setAuthState] = useContext(AuthContext);
    const navigate = useNavigate();

    const signin = (path: string) => {
        setAuthState(prev => ({ ...prev, authenticated: true }));
        Toast.success('Logged in successfully!')
        navigate(path);
    }

    const logout = () => {
        setAuthState(prev => ({ ...prev, authenticated: false }));
        storage.removeToken();
        Toast.info('Logged out successfully!')
        navigate('/login');
    }



    return {
        authenticated: authState.authenticated,
        signin,
        logout
    }
}
