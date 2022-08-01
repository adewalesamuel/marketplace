import { useState } from 'react';
import { Services } from '../services';

export const useReviews = () => {
    const [id, setId] = useState('');
	const [client_id, setClient_id] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [message, setMessage] = useState('');
	const [score, setScore] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getReviews = (reviewsId, signal) => {        
        return Services.ReviewsService.getById(reviewsId, signal)
        .then(response => {
            fillReviews(response.reviews);
            setIsDisabled(false);
        });
    }

    const createReviews = signal => {
        const payload = {
            client_id,
		artisan_id,
		message,
		score,
		
        };

        return Services.ReviewsService.create(JSON.stringify(payload), signal);
    }
    const updateReviews = (reviewsId, signal) => {
        const payload = {
            client_id,
		artisan_id,
		message,
		score,
		
        };

        return Services.ReviewsService.update(reviewsId, JSON.stringify(payload), signal);
    }
    const deleteReviews = (reviewsId, signal) => {
        return Services.ReviewsService.destroy(reviewsId, signal);
    }
    const fillReviews = (reviews) => {
        setId(reviews.id);
        setClient_id(reviews.client_id ?? '');
		setArtisan_id(reviews.artisan_id ?? '');
		setMessage(reviews.message ?? '');
		setScore(reviews.score ?? '');
		
    }
    const emptyReviews = () => {
        setId('');
        setClient_id('');
		setArtisan_id('');
		setMessage('');
		setScore('');
		
    }

    return {
        id,
        client_id,
		artisan_id,
		message,
		score,
		
        errors,
        isDisabled,
        setClient_id,
		setArtisan_id,
		setMessage,
		setScore,
		
        setId,
        setErrors,
        setIsDisabled,
        getReviews,
        createReviews,
        updateReviews,
        deleteReviews,
        fillReviews,
        emptyReviews
    };
}