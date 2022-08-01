import { useState } from 'react';
import { Services } from '../services';

export const useArticle = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [attributes, setAttributes] = useState('');
	const [period, setPeriod] = useState('');
	const [address, setAddress] = useState('');
	const [img_url, setImg_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getArticle = (articleId, signal) => {        
        return Services.ArticleService.getById(articleId, signal)
        .then(response => {
            fillArticle(response.article);
            setIsDisabled(false);
        });
    }

    const createArticle = signal => {
        const payload = {
            name,
		description,
		type,
		quantity,
		price,
		discount,
		artisan_id,
		attributes,
		period,
		address,
		img_url,
		
        };

        return Services.ArticleService.create(JSON.stringify(payload), signal);
    }
    const updateArticle = (articleId, signal) => {
        const payload = {
            name,
		description,
		type,
		quantity,
		price,
		discount,
		artisan_id,
		attributes,
		period,
		address,
		img_url,
		
        };

        return Services.ArticleService.update(articleId, JSON.stringify(payload), signal);
    }
    const deleteArticle = (articleId, signal) => {
        return Services.ArticleService.destroy(articleId, signal);
    }
    const fillArticle = (article) => {
        setId(article.id);
        setName(article.name ?? '');
		setDescription(article.description ?? '');
		setType(article.type ?? '');
		setQuantity(article.quantity ?? '');
		setPrice(article.price ?? '');
		setDiscount(article.discount ?? '');
		setArtisan_id(article.artisan_id ?? '');
		setAttributes(article.attributes ?? '');
		setPeriod(article.period ?? '');
		setAddress(article.address ?? '');
		setImg_url(article.img_url ?? '');
		
    }
    const emptyArticle = () => {
        setId('');
        setName('');
		setDescription('');
		setType('');
		setQuantity('');
		setPrice('');
		setDiscount('');
		setArtisan_id('');
		setAttributes('');
		setPeriod('');
		setAddress('');
		setImg_url('');
		
    }

    return {
        id,
        name,
		description,
		type,
		quantity,
		price,
		discount,
		artisan_id,
		attributes,
		period,
		address,
		img_url,
		
        errors,
        isDisabled,
        setName,
		setDescription,
		setType,
		setQuantity,
		setPrice,
		setDiscount,
		setArtisan_id,
		setAttributes,
		setPeriod,
		setAddress,
		setImg_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getArticle,
        createArticle,
        updateArticle,
        deleteArticle,
        fillArticle,
        emptyArticle
    };
}