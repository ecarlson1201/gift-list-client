import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_SEARCH_DATA_SUCCESS,
    FETCH_SEARCH_DATA_ERROR,
    DISPLAY_SEARCH_PARAMS,
    fetchProtectedDataSuccess,
    fetchProtectedDataError,
    fetchSearchDataSuccess,
    fetchSearchDataError,
    displaySearchParams
} from '../../actions/protected-data';

describe('fetchProtectedDataSuccess', () => {
    it('Should return the action', () => {
        const data = {
            "lists": [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
        };
        const action = fetchProtectedDataSuccess(data);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchProtectedDataError', () => {
    it('Should return the action', () => {
        const error = 'error';
        const action = fetchProtectedDataError(error);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchSearchDataSuccess', () => {
    it('Should return the action', () => {
        const search = [
            { gift: 1 },
            { gift: 2 },
            { gift: 3 }
        ];
        const action = fetchSearchDataSuccess(search);
        expect(action.type).toEqual(FETCH_SEARCH_DATA_SUCCESS);
        expect(action.data).toEqual(search);
    });
});

describe('fetchSearchDataError', () => {
    it('Should return the action', () => {
        const error = 'error';
        const action = fetchSearchDataError(error);
        expect(action.type).toEqual(FETCH_SEARCH_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('displaySearchParams', () => {
    it('Should return the action', () => {
        const params = {
            holiday: "Birthday",
            recipient: "Friend",
            price: "$0-$20"
        };
        const action = displaySearchParams(params);
        expect(action.type).toEqual(DISPLAY_SEARCH_PARAMS);
        expect(action.data).toEqual(params);
    });
});