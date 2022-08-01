import { useState } from 'react';
import { Services } from '../services';

export const useSouscriptionPack = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');
	const [attributes, setAttributes] = useState('');
	const [period, setPeriod] = useState('');
	const [address, setAddress] = useState('');
	const [img_url, setImg_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSouscriptionPack = (souscriptionpackId, signal) => {        
        return Services.SouscriptionPackService.getById(souscriptionpackId, signal)
        .then(response => {
            fillSouscriptionPack(response.souscriptionpack);
            setIsDisabled(false);
        });
    }

    const createSouscriptionPack = signal => {
        const payload = {
            name,
		description,
		price,
		discount,
		attributes,
		period,
		address,
		img_url,
		
        };

        return Services.SouscriptionPackService.create(JSON.stringify(payload), signal);
    }
    const updateSouscriptionPack = (souscriptionpackId, signal) => {
        const payload = {
            name,
		description,
		price,
		discount,
		attributes,
		period,
		address,
		img_url,
		
        };

        return Services.SouscriptionPackService.update(souscriptionpackId, JSON.stringify(payload), signal);
    }
    const deleteSouscriptionPack = (souscriptionpackId, signal) => {
        return Services.SouscriptionPackService.destroy(souscriptionpackId, signal);
    }
    const fillSouscriptionPack = (souscriptionpack) => {
        setId(souscriptionpack.id);
        setName(souscriptionpack.name ?? '');
		setDescription(souscriptionpack.description ?? '');
		setPrice(souscriptionpack.price ?? '');
		setDiscount(souscriptionpack.discount ?? '');
		setAttributes(souscriptionpack.attributes ?? '');
		setPeriod(souscriptionpack.period ?? '');
		setAddress(souscriptionpack.address ?? '');
		setImg_url(souscriptionpack.img_url ?? '');
		
    }
    const emptySouscriptionPack = () => {
        setId('');
        setName('');
		setDescription('');
		setPrice('');
		setDiscount('');
		setAttributes('');
		setPeriod('');
		setAddress('');
		setImg_url('');
		
    }

    return {
        id,
        name,
		description,
		price,
		discount,
		attributes,
		period,
		address,
		img_url,
		
        errors,
        isDisabled,
        setName,
		setDescription,
		setPrice,
		setDiscount,
		setAttributes,
		setPeriod,
		setAddress,
		setImg_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getSouscriptionPack,
        createSouscriptionPack,
        updateSouscriptionPack,
        deleteSouscriptionPack,
        fillSouscriptionPack,
        emptySouscriptionPack
    };
}