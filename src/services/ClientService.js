import { Api } from './Api';

const  ENPOINTS = {
    Client: 'clients',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Client, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Client}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Client, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Client}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Client}/${id}`, signal)
}

export const ClientService = {
    getAll,
    getById,
    create,
    update,
    destroy
}