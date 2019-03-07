import config from 'config';
import { authHeader } from '../_helpers';

export const momentService = {
    create,
    getByUsername,
    getByDate,
    getRandom
};

function create(moment) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(moment)
    };

    return fetch(`${config.apiUrl}/moments/createMoment`, requestOptions).then(handleResponse);
}

function getByUsername(username) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/moments/${username}`, requestOptions).then(handleResponse);
}

function getByDate(username, date) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/moments/${username}/${date}`, requestOptions).then(handleResponse);
}

function getRandom(username) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/moments/random/${username}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}