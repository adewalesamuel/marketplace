import { Api } from './Api';

const  ENPOINTS = {
    PasswordForgotten: 'passwordforgottens',
};

const getAll = signal => {
    return Api.get(ENPOINTS.PasswordForgotten, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.PasswordForgotten}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.PasswordForgotten, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.PasswordForgotten}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.PasswordForgotten}/${id}`, signal)
}

export const PasswordForgottenService = {
    getAll,
    getById,
    create,
    update,
    destroy
}