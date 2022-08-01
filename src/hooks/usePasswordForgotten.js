import { useState } from 'react';
import { Services } from '../services';

export const usePasswordForgotten = () => {
    const [id, setId] = useState('');
	const [user_email, setUser_email] = useState('');
	const [user_type, setUser_type] = useState('');
	const [token, setToken] = useState('');
	const [has_been_used, setHas_been_used] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPasswordForgotten = (passwordforgottenId, signal) => {        
        return Services.PasswordForgottenService.getById(passwordforgottenId, signal)
        .then(response => {
            fillPasswordForgotten(response.passwordforgotten);
            setIsDisabled(false);
        });
    }

    const createPasswordForgotten = signal => {
        const payload = {
            user_email,
		user_type,
		token,
		has_been_used,
		
        };

        return Services.PasswordForgottenService.create(JSON.stringify(payload), signal);
    }
    const updatePasswordForgotten = (passwordforgottenId, signal) => {
        const payload = {
            user_email,
		user_type,
		token,
		has_been_used,
		
        };

        return Services.PasswordForgottenService.update(passwordforgottenId, JSON.stringify(payload), signal);
    }
    const deletePasswordForgotten = (passwordforgottenId, signal) => {
        return Services.PasswordForgottenService.destroy(passwordforgottenId, signal);
    }
    const fillPasswordForgotten = (passwordforgotten) => {
        setId(passwordforgotten.id);
        setUser_email(passwordforgotten.user_email ?? '');
		setUser_type(passwordforgotten.user_type ?? '');
		setToken(passwordforgotten.token ?? '');
		setHas_been_used(passwordforgotten.has_been_used ?? '');
		
    }
    const emptyPasswordForgotten = () => {
        setId('');
        setUser_email('');
		setUser_type('');
		setToken('');
		setHas_been_used('');
		
    }

    return {
        id,
        user_email,
		user_type,
		token,
		has_been_used,
		
        errors,
        isDisabled,
        setUser_email,
		setUser_type,
		setToken,
		setHas_been_used,
		
        setId,
        setErrors,
        setIsDisabled,
        getPasswordForgotten,
        createPasswordForgotten,
        updatePasswordForgotten,
        deletePasswordForgotten,
        fillPasswordForgotten,
        emptyPasswordForgotten
    };
}