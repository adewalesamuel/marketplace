import { useState } from 'react';
import { Services } from '../services';

export const useAdmin = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');
	const [img_url, setImg_url] = useState('');
	const [api_token, setApi_token] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getAdmin = (adminId, signal) => {        
        return Services.AdminService.getById(adminId, signal)
        .then(response => {
            fillAdmin(response.admin);
            setIsDisabled(false);
        });
    }

    const createAdmin = signal => {
        const payload = {
            name,
		email,
		password,
		role,
		img_url,
		api_token,
		
        };

        return Services.AdminService.create(JSON.stringify(payload), signal);
    }
    const updateAdmin = (adminId, signal) => {
        const payload = {
            name,
		email,
		password,
		role,
		img_url,
		api_token,
		
        };

        return Services.AdminService.update(adminId, JSON.stringify(payload), signal);
    }
    const deleteAdmin = (adminId, signal) => {
        return Services.AdminService.destroy(adminId, signal);
    }
    const fillAdmin = (admin) => {
        setId(admin.id);
        setName(admin.name ?? '');
		setEmail(admin.email ?? '');
		setPassword(admin.password ?? '');
		setRole(admin.role ?? '');
		setImg_url(admin.img_url ?? '');
		setApi_token(admin.api_token ?? '');
		
    }
    const emptyAdmin = () => {
        setId('');
        setName('');
		setEmail('');
		setPassword('');
		setRole('');
		setImg_url('');
		setApi_token('');
		
    }

    return {
        id,
        name,
		email,
		password,
		role,
		img_url,
		api_token,
		
        errors,
        isDisabled,
        setName,
		setEmail,
		setPassword,
		setRole,
		setImg_url,
		setApi_token,
		
        setId,
        setErrors,
        setIsDisabled,
        getAdmin,
        createAdmin,
        updateAdmin,
        deleteAdmin,
        fillAdmin,
        emptyAdmin
    };
}