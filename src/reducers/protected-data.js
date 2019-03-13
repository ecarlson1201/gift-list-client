import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_SEARCH_DATA_ERROR,
    FETCH_SEARCH_DATA_SUCCESS,
    DISPLAY_SEARCH_PARAMS
} from '../actions/protected-data';

const initialState = {
    data: {
        "lists": []
    },
    search: [{name: "No Results Found"}],
    searchParams: {},
    error: null
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_PROTECTED_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                error: null
            });
        case FETCH_PROTECTED_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        case FETCH_SEARCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                search: action.data,
                error: null
            });
        case FETCH_SEARCH_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        case DISPLAY_SEARCH_PARAMS:
            return Object.assign({}, state, {
                searchParams: action.data
            })

        default:
            return state;
    };
};