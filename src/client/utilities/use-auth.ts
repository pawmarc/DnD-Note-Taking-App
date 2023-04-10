import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import storage from '../utilities/storage';

export const useAuth = () => {
    const [authState, setAuthState] = useContext(AuthContext);
    const navigate = useNavigate();

    const signIn = (path: string) => {
        setAuthState(prev => ({ ...prev, authenticated: true }));
        navigate(path);
    }

    const logout = () => {
        setAuthState(prev => ({ ...prev, authenticated: false }));
        storage.removeToken();
        navigate('/login');
    }



    return {
        authenticated: authState.authenticated,
        signIn,
        logout
    }
}
