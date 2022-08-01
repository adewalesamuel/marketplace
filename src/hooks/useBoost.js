import { useState } from 'react';
import { Services } from '../services';

export const useBoost = () => {
    const [id, setId] = useState('');
	const [boost_pack_id, setBoost_pack_id] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [payment_status, setPayment_status] = useState('');
	const [payment_method, setPayment_method] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getBoost = (boostId, signal) => {        
        return Services.BoostService.getById(boostId, signal)
        .then(response => {
            fillBoost(response.boost);
            setIsDisabled(false);
        });
    }

    const createBoost = signal => {
        const payload = {
            boost_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        };

        return Services.BoostService.create(JSON.stringify(payload), signal);
    }
    const updateBoost = (boostId, signal) => {
        const payload = {
            boost_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        };

        return Services.BoostService.update(boostId, JSON.stringify(payload), signal);
    }
    const deleteBoost = (boostId, signal) => {
        return Services.BoostService.destroy(boostId, signal);
    }
    const fillBoost = (boost) => {
        setId(boost.id);
        setBoost_pack_id(boost.boost_pack_id ?? '');
		setArtisan_id(boost.artisan_id ?? '');
		setPayment_status(boost.payment_status ?? '');
		setPayment_method(boost.payment_method ?? '');
		
    }
    const emptyBoost = () => {
        setId('');
        setBoost_pack_id('');
		setArtisan_id('');
		setPayment_status('');
		setPayment_method('');
		
    }

    return {
        id,
        boost_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        errors,
        isDisabled,
        setBoost_pack_id,
		setArtisan_id,
		setPayment_status,
		setPayment_method,
		
        setId,
        setErrors,
        setIsDisabled,
        getBoost,
        createBoost,
        updateBoost,
        deleteBoost,
        fillBoost,
        emptyBoost
    };
}