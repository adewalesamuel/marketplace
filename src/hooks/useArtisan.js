import { useState } from 'react';
import { Services } from '../services';

export const useArtisan = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [postal_code, setPostal_code] = useState('');
	const [address, setAddress] = useState('');
	const [is_active, setIs_active] = useState('');
	const [img_url, setImg_url] = useState('');
	const [api_token, setApi_token] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getArtisan = (artisanId, signal) => {        
        return Services.ArtisanService.getById(artisanId, signal)
        .then(response => {
            fillArtisan(response.artisan);
            setIsDisabled(false);
        });
    }

    const createArtisan = signal => {
        const payload = {
            name,
		email,
		password,
		phone,
		country,
		city,
		postal_code,
		address,
		is_active,
		img_url,
		api_token,
		
        };

        return Services.ArtisanService.create(JSON.stringify(payload), signal);
    }
    const updateArtisan = (artisanId, signal) => {
        const payload = {
            name,
		email,
		password,
		phone,
		country,
		city,
		postal_code,
		address,
		is_active,
		img_url,
		api_token,
		
        };

        return Services.ArtisanService.update(artisanId, JSON.stringify(payload), signal);
    }
    const deleteArtisan = (artisanId, signal) => {
        return Services.ArtisanService.destroy(artisanId, signal);
    }
    const fillArtisan = (artisan) => {
        setId(artisan.id);
        setName(artisan.name ?? '');
		setEmail(artisan.email ?? '');
		setPassword(artisan.password ?? '');
		setPhone(artisan.phone ?? '');
		setCountry(artisan.country ?? '');
		setCity(artisan.city ?? '');
		setPostal_code(artisan.postal_code ?? '');
		setAddress(artisan.address ?? '');
		setIs_active(artisan.is_active ?? '');
		setImg_url(artisan.img_url ?? '');
		setApi_token(artisan.api_token ?? '');
		
    }
    const emptyArtisan = () => {
        setId('');
        setName('');
		setEmail('');
		setPassword('');
		setPhone('');
		setCountry('');
		setCity('');
		setPostal_code('');
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
		postal_code,
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
		setPostal_code,
		setAddress,
		setIs_active,
		setImg_url,
		setApi_token,
		
        setId,
        setErrors,
        setIsDisabled,
        getArtisan,
        createArtisan,
        updateArtisan,
        deleteArtisan,
        fillArtisan,
        emptyArtisan
    };
}