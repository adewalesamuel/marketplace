import { useState } from 'react';
import { Services } from '../services';

export const useQuote = () => {
    const [id, setId] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [message, setMessage] = useState('');
	const [client_email, setClient_email] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getQuote = (quoteId, signal) => {        
        return Services.QuoteService.getById(quoteId, signal)
        .then(response => {
            fillQuote(response.quote);
            setIsDisabled(false);
        });
    }

    const createQuote = signal => {
        const payload = {
            artisan_id,
		message,
		client_email,
		
        };

        return Services.QuoteService.create(JSON.stringify(payload), signal);
    }
    const updateQuote = (quoteId, signal) => {
        const payload = {
            artisan_id,
		message,
		client_email,
		
        };

        return Services.QuoteService.update(quoteId, JSON.stringify(payload), signal);
    }
    const deleteQuote = (quoteId, signal) => {
        return Services.QuoteService.destroy(quoteId, signal);
    }
    const fillQuote = (quote) => {
        setId(quote.id);
        setArtisan_id(quote.artisan_id ?? '');
		setMessage(quote.message ?? '');
		setClient_email(quote.client_email ?? '');
		
    }
    const emptyQuote = () => {
        setId('');
        setArtisan_id('');
		setMessage('');
		setClient_email('');
		
    }

    return {
        id,
        artisan_id,
		message,
		client_email,
		
        errors,
        isDisabled,
        setArtisan_id,
		setMessage,
		setClient_email,
		
        setId,
        setErrors,
        setIsDisabled,
        getQuote,
        createQuote,
        updateQuote,
        deleteQuote,
        fillQuote,
        emptyQuote
    };
}