import { Api } from './Api';

const  ENPOINTS = {
    BoostPack: 'boostpacks',
};

const getAll = signal => {
    return Api.get(ENPOINTS.BoostPack, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.BoostPack}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.BoostPack, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.BoostPack}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.BoostPack}/${id}`, signal)
}

export const BoostPackService = {
    getAll,
    getById,
    create,
    update,
    destroy
}