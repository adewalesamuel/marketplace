import { Api } from './Api';

const  ENPOINTS = {
    Article: 'articles',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Article, signal)
}

const getBestArticles = (signal) => {
    return Api.get(`${ENPOINTS.Article}/best`, signal)
}

const getTrendingArticles = signal => {
    return Api.get(`${ENPOINTS.Article}/trending`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Article}/${id}`, signal);
}

const getBySlug = (slug, signal) => {
    return Api.get(`${ENPOINTS.Article}/${slug}`, signal);
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
    getTrendingArticles,
    getBestArticles,
    getById,
    getBySlug,
    create,
    update,
    destroy
}