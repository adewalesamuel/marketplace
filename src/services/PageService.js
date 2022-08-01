import { Api } from './Api';

const  ENPOINTS = {
    Page: 'pages',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Page, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Page}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Page, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Page}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Page}/${id}`, signal)
}

export const PageService = {
    getAll,
    getById,
    create,
    update,
    destroy
}