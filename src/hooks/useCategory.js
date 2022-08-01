import { useState } from 'react';
import { Services } from '../services';

export const useCategory = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [slug, setSlug] = useState('');
	const [parent_category, setParent_category] = useState('');
	const [img_url, setImg_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategory = (categoryId, signal) => {        
        return Services.CategoryService.getById(categoryId, signal)
        .then(response => {
            fillCategory(response.category);
            setIsDisabled(false);
        });
    }

    const createCategory = signal => {
        const payload = {
            name,
		description,
		slug,
		parent_category,
		img_url,
		
        };

        return Services.CategoryService.create(JSON.stringify(payload), signal);
    }
    const updateCategory = (categoryId, signal) => {
        const payload = {
            name,
		description,
		slug,
		parent_category,
		img_url,
		
        };

        return Services.CategoryService.update(categoryId, JSON.stringify(payload), signal);
    }
    const deleteCategory = (categoryId, signal) => {
        return Services.CategoryService.destroy(categoryId, signal);
    }
    const fillCategory = (category) => {
        setId(category.id);
        setName(category.name ?? '');
		setDescription(category.description ?? '');
		setSlug(category.slug ?? '');
		setParent_category(category.parent_category ?? '');
		setImg_url(category.img_url ?? '');
		
    }
    const emptyCategory = () => {
        setId('');
        setName('');
		setDescription('');
		setSlug('');
		setParent_category('');
		setImg_url('');
		
    }

    return {
        id,
        name,
		description,
		slug,
		parent_category,
		img_url,
		
        errors,
        isDisabled,
        setName,
		setDescription,
		setSlug,
		setParent_category,
		setImg_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory,
        fillCategory,
        emptyCategory
    };
}