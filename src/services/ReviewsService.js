import { Api } from './Api';

const  ENPOINTS = {
    Reviews: 'reviewss',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Reviews, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Reviews}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Reviews, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Reviews}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Reviews}/${id}`, signal)
}

export const ReviewsService = {
    getAll,
    getById,
    create,
    update,
    destroy
}