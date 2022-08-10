import { Api } from './Api';

const  ENPOINTS = {
    Order: 'orders',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Order, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Order}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(`client/${ENPOINTS.Order}`, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Order}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Order}/${id}`, signal)
}

export const OrderService = {
    getAll,
    getById,
    create,
    update,
    destroy
}