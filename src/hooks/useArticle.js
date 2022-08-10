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
	const [img_urls, setImg_urls] = useState('');

	const [artisan, setArtisan] = useState('');
	const [category, setCategory] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getArticle = (articleSlug, signal) => {        
        return Services.ArticleService.getBySlug(articleSlug, signal)
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
		img_urls,
		
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
		img_urls,
		
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
		setImg_urls(article.img_urls ?? '');
		setArtisan(article.artisan ?? null);
		setCategory(article.category ?? null);
		
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
		setImg_urls('');
		setCategory('');
		setArtisan('');
		
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
		img_urls,
		artisan,
		category,
		
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
		setImg_urls,
		
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