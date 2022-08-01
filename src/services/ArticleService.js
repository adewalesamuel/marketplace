import { Api } from './Api';

const  ENPOINTS = {
    Article: 'articles',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Article, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Article}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Article, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Article}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Article}/${id}`, signal)
}

export const ArticleService = {
    getAll,
    getById,
    create,
    update,
    destroy
}