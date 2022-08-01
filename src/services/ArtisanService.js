import { Api } from './Api';

const  ENPOINTS = {
    Artisan: 'artisans',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Artisan, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Artisan}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Artisan, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Artisan}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Artisan}/${id}`, signal)
}

export const ArtisanService = {
    getAll,
    getById,
    create,
    update,
    destroy
}