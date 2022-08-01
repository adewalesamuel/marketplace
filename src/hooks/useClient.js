import { useState } from 'react';
import { Services } from '../services';

export const useClient = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [is_active, setIs_active] = useState('');
	const [img_url, setImg_url] = useState('');
	const [api_token, setApi_token] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getClient = (clientId, signal) => {        
        return Services.ClientService.getById(clientId, signal)
        .then(response => {
            fillClient(response.client);
            setIsDisabled(false);
        });
    }

    const createClient = signal => {
        const payload = {
            name,
		email,
		password,
		phone,
		country,
		city,
		address,
		is_active,
		img_url,
		api_token,
		
        };

        return Services.ClientService.create(JSON.stringify(payload), signal);
    }
    const updateClient = (clientId, signal) => {
        const payload = {
            name,
		email,
		password,
		phone,
		country,
		city,
		address,
		is_active,
		img_url,
		api_token,
		
        };

        return Services.ClientService.update(clientId, JSON.stringify(payload), signal);
    }
    const deleteClient = (clientId, signal) => {
        return Services.ClientService.destroy(clientId, signal);
    }
    const fillClient = (client) => {
        setId(client.id);
        setName(client.name ?? '');
		setEmail(client.email ?? '');
		setPassword(client.password ?? '');
		setPhone(client.phone ?? '');
		setCountry(client.country ?? '');
		setCity(client.city ?? '');
		setAddress(client.address ?? '');
		setIs_active(client.is_active ?? '');
		setImg_url(client.img_url ?? '');
		setApi_token(client.api_token ?? '');
		
    }
    const emptyClient = () => {
        setId('');
        setName('');
		setEmail('');
		setPassword('');
		setPhone('');
		setCountry('');
		setCity('');
		setAddress('');
		setIs_active('');
		setImg_url('');
		setApi_token('');
		
    }

    return {
        id,
        name,
		email,
		password,
		phone,
		country,
		city,
		address,
		is_active,
		img_url,
		api_token,
		
        errors,
        isDisabled,
        setName,
		setEmail,
		setPassword,
		setPhone,
		setCountry,
		setCity,
		setAddress,
		setIs_active,
		setImg_url,
		setApi_token,
		
        setId,
        setErrors,
        setIsDisabled,
        getClient,
        createClient,
        updateClient,
        deleteClient,
        fillClient,
        emptyClient
    };
}