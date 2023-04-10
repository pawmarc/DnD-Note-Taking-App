import storage from '../utilities/storage';
import { get, post } from './base';

const loginUser = async (payload: { [key: string]: string }) => {
    try {
        const { token } = await post('/auth/login', payload);
        storage.setToken(token);
    } catch (error) {
        throw error;
    }
}
const registerUser = async (payload: { [key: string]: string }) => {
    try {
        const { token } = await post('/auth/register', payload);
        storage.setToken(token);
    } catch (error) {
        throw error;
    }
}

const validateToken = async () => {
    try {
        await get('/auth/validate/me')
    } catch (error) {
        throw error;
    }
}




export default {
    loginUser,
    registerUser,
    validateToken,
};