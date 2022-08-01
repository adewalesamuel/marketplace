import { useState } from 'react';
import { Services } from '../services';

export const useOrder = () => {
    const [id, setId] = useState('');
	const [article_id, setArticle_id] = useState('');
	const [client_id, setClient_id] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState('');
	const [payment_status, setPayment_status] = useState('');
	const [payment_method, setPayment_method] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getOrder = (orderId, signal) => {        
        return Services.OrderService.getById(orderId, signal)
        .then(response => {
            fillOrder(response.order);
            setIsDisabled(false);
        });
    }

    const createOrder = signal => {
        const payload = {
            article_id,
		client_id,
		quantity,
		price,
		payment_status,
		payment_method,
		
        };

        return Services.OrderService.create(JSON.stringify(payload), signal);
    }
    const updateOrder = (orderId, signal) => {
        const payload = {
            article_id,
		client_id,
		quantity,
		price,
		payment_status,
		payment_method,
		
        };

        return Services.OrderService.update(orderId, JSON.stringify(payload), signal);
    }
    const deleteOrder = (orderId, signal) => {
        return Services.OrderService.destroy(orderId, signal);
    }
    const fillOrder = (order) => {
        setId(order.id);
        setArticle_id(order.article_id ?? '');
		setClient_id(order.client_id ?? '');
		setQuantity(order.quantity ?? '');
		setPrice(order.price ?? '');
		setPayment_status(order.payment_status ?? '');
		setPayment_method(order.payment_method ?? '');
		
    }
    const emptyOrder = () => {
        setId('');
        setArticle_id('');
		setClient_id('');
		setQuantity('');
		setPrice('');
		setPayment_status('');
		setPayment_method('');
		
    }

    return {
        id,
        article_id,
		client_id,
		quantity,
		price,
		payment_status,
		payment_method,
		
        errors,
        isDisabled,
        setArticle_id,
		setClient_id,
		setQuantity,
		setPrice,
		setPayment_status,
		setPayment_method,
		
        setId,
        setErrors,
        setIsDisabled,
        getOrder,
        createOrder,
        updateOrder,
        deleteOrder,
        fillOrder,
        emptyOrder
    };
}