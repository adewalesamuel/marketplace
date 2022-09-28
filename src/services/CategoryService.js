import { Api } from './Api';

const  ENPOINTS = {
    Category: 'categories',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Category, signal)
}

const getArticles = (signal, slug, pageNumber=1) => {
    return Api.get(`${ENPOINTS.Category}/${slug}/articles?page=${pageNumber}`, signal);
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Category}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Category, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Category}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Category}/${id}`, signal)
}

export const CategoryService = {
    getAll,
    getById,
    create,
    update,
    destroy,
    getArticles
}