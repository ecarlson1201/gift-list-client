import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/lists/protected`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const postGift = gift => dispatch => {
    return fetch(`${API_BASE_URL}/accounts/gifts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gift)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            };
        });
};

export const addGiftList = title => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/lists/protected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(title)
    })
        .then(res => normalizeResponseErrors(res))
        .then(data => dispatch(fetchProtectedData(data)))
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            };
        });
};

export const deleteGiftList = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/lists/protected`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({_id: id})
    })
        .then(res => normalizeResponseErrors(res))
        .then(data => fetchProtectedData(data))
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            };
        });
};

export const saveGift = (gift, list) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/giftsave/protected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({gift: gift, list: list})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            };
        });
};

export const deleteGift = (gift, list) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/gifts/protected`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({gift: gift, list: list})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            };
        });
};