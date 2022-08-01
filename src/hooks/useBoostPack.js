import { useState } from 'react';
import { Services } from '../services';

export const useBoostPack = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');
	const [img_url, setImg_url] = useState('');
	const [period, setPeriod] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getBoostPack = (boostpackId, signal) => {        
        return Services.BoostPackService.getById(boostpackId, signal)
        .then(response => {
            fillBoostPack(response.boostpack);
            setIsDisabled(false);
        });
    }

    const createBoostPack = signal => {
        const payload = {
            name,
		description,
		price,
		discount,
		img_url,
		period,
		
        };

        return Services.BoostPackService.create(JSON.stringify(payload), signal);
    }
    const updateBoostPack = (boostpackId, signal) => {
        const payload = {
            name,
		description,
		price,
		discount,
		img_url,
		period,
		
        };

        return Services.BoostPackService.update(boostpackId, JSON.stringify(payload), signal);
    }
    const deleteBoostPack = (boostpackId, signal) => {
        return Services.BoostPackService.destroy(boostpackId, signal);
    }
    const fillBoostPack = (boostpack) => {
        setId(boostpack.id);
        setName(boostpack.name ?? '');
		setDescription(boostpack.description ?? '');
		setPrice(boostpack.price ?? '');
		setDiscount(boostpack.discount ?? '');
		setImg_url(boostpack.img_url ?? '');
		setPeriod(boostpack.period ?? '');
		
    }
    const emptyBoostPack = () => {
        setId('');
        setName('');
		setDescription('');
		setPrice('');
		setDiscount('');
		setImg_url('');
		setPeriod('');
		
    }

    return {
        id,
        name,
		description,
		price,
		discount,
		img_url,
		period,
		
        errors,
        isDisabled,
        setName,
		setDescription,
		setPrice,
		setDiscount,
		setImg_url,
		setPeriod,
		
        setId,
        setErrors,
        setIsDisabled,
        getBoostPack,
        createBoostPack,
        updateBoostPack,
        deleteBoostPack,
        fillBoostPack,
        emptyBoostPack
    };
}