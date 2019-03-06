import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fecthProtectedDataError = error => ({
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
        .then(( data ) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fecthProtectedDataError(err));
        });
};

export const ADD_GIFT_LIST = 'ADD_GIFT_LIST';
export const addGiftList = title => ({
    type: ADD_GIFT_LIST,
    title
});

export const SAVE_GIFT = 'SAVE_GIFT';
export const saveGift = (title, gift) => ({
    type: SAVE_GIFT,
    title,
    gift
});

export const DELETE_GIFT_LIST = 'DELETE_GIFT_LIST';
export const deleteGiftList = index => ({
    type: DELETE_GIFT_LIST,
    index
});

export const DELETE_GIFT = "DELETE_GIFT";
export const deleteGift = (title, gift) => ({
    type: DELETE_GIFT,
    title,
    gift
});