import { useState } from 'react';
import { Services } from '../services';

export const useSouscription = () => {
    const [id, setId] = useState('');
	const [souscription_pack_id, setSouscription_pack_id] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [payment_status, setPayment_status] = useState('');
	const [payment_method, setPayment_method] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSouscription = (souscriptionId, signal) => {        
        return Services.SouscriptionService.getById(souscriptionId, signal)
        .then(response => {
            fillSouscription(response.souscription);
            setIsDisabled(false);
        });
    }

    const createSouscription = signal => {
        const payload = {
            souscription_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        };

        return Services.SouscriptionService.create(JSON.stringify(payload), signal);
    }
    const updateSouscription = (souscriptionId, signal) => {
        const payload = {
            souscription_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        };

        return Services.SouscriptionService.update(souscriptionId, JSON.stringify(payload), signal);
    }
    const deleteSouscription = (souscriptionId, signal) => {
        return Services.SouscriptionService.destroy(souscriptionId, signal);
    }
    const fillSouscription = (souscription) => {
        setId(souscription.id);
        setSouscription_pack_id(souscription.souscription_pack_id ?? '');
		setArtisan_id(souscription.artisan_id ?? '');
		setPayment_status(souscription.payment_status ?? '');
		setPayment_method(souscription.payment_method ?? '');
		
    }
    const emptySouscription = () => {
        setId('');
        setSouscription_pack_id('');
		setArtisan_id('');
		setPayment_status('');
		setPayment_method('');
		
    }

    return {
        id,
        souscription_pack_id,
		artisan_id,
		payment_status,
		payment_method,
		
        errors,
        isDisabled,
        setSouscription_pack_id,
		setArtisan_id,
		setPayment_status,
		setPayment_method,
		
        setId,
        setErrors,
        setIsDisabled,
        getSouscription,
        createSouscription,
        updateSouscription,
        deleteSouscription,
        fillSouscription,
        emptySouscription
    };
}