import { Api } from './Api';

const  ENPOINTS = {
    Login: 'login',
    Logout: 'logout'
};


const login = (userType='client', payload, signal) => {
    return Api.post(`${userType}/${ENPOINTS.Login}`, payload, signal)
}

const logout = (userType='client', payload, signal) => {
    return Api.post(`${userType}/${ENPOINTS.Logout}`, payload, signal)
}


export const AuthService = {
    login,
    logout
}