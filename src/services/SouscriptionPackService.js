import { Api } from './Api';

const  ENPOINTS = {
    SouscriptionPack: 'souscriptionpacks',
};

const getAll = signal => {
    return Api.get(ENPOINTS.SouscriptionPack, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.SouscriptionPack}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.SouscriptionPack, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.SouscriptionPack}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.SouscriptionPack}/${id}`, signal)
}

export const SouscriptionPackService = {
    getAll,
    getById,
    create,
    update,
    destroy
}