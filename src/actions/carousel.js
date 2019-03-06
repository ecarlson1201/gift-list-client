import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_CAROUSEL_DATA_SUCCESS = 'FETCH_CAROUSEL_DATA_SUCCESS';
export const fetchCarouselDataSuccess = data => ({
    type: FETCH_CAROUSEL_DATA_SUCCESS,
    data
});

export const FETCH_CAROUSEL_DATA_ERROR = 'FETCH_CAROUSEL_DATA_ERROR';
export const fecthCarouselDataError = error => ({
    type: FETCH_CAROUSEL_DATA_ERROR,
    error
});

export const fetchCarouselData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/accounts/lists/protected`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(( data ) => dispatch(fetchCarouselDataSuccess(data)))
        .catch(err => {
            dispatch(fecthCarouselDataError(err));
        });
};