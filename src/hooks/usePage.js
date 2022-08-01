import { useState } from 'react';
import { Services } from '../services';

export const usePage = () => {
    const [id, setId] = useState('');
	const [artisan_id, setArtisan_id] = useState('');
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPage = (pageId, signal) => {        
        return Services.PageService.getById(pageId, signal)
        .then(response => {
            fillPage(response.page);
            setIsDisabled(false);
        });
    }

    const createPage = signal => {
        const payload = {
            artisan_id,
		content,
		title,
		
        };

        return Services.PageService.create(JSON.stringify(payload), signal);
    }
    const updatePage = (pageId, signal) => {
        const payload = {
            artisan_id,
		content,
		title,
		
        };

        return Services.PageService.update(pageId, JSON.stringify(payload), signal);
    }
    const deletePage = (pageId, signal) => {
        return Services.PageService.destroy(pageId, signal);
    }
    const fillPage = (page) => {
        setId(page.id);
        setArtisan_id(page.artisan_id ?? '');
		setContent(page.content ?? '');
		setTitle(page.title ?? '');
		
    }
    const emptyPage = () => {
        setId('');
        setArtisan_id('');
		setContent('');
		setTitle('');
		
    }

    return {
        id,
        artisan_id,
		content,
		title,
		
        errors,
        isDisabled,
        setArtisan_id,
		setContent,
		setTitle,
		
        setId,
        setErrors,
        setIsDisabled,
        getPage,
        createPage,
        updatePage,
        deletePage,
        fillPage,
        emptyPage
    };
}