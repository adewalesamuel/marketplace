import { Api } from './Api';

const  ENPOINTS = {
    Quote: 'quotes',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Quote, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Quote}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Quote, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Quote}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Quote}/${id}`, signal)
}

export const QuoteService = {
    getAll,
    getById,
    create,
    update,
    destroy
}