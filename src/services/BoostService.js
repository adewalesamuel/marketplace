import { Api } from './Api';

const  ENPOINTS = {
    Boost: 'boosts',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Boost, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Boost}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Boost, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Boost}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Boost}/${id}`, signal)
}

export const BoostService = {
    getAll,
    getById,
    create,
    update,
    destroy
}