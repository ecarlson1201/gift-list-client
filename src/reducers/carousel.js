import {
    FETCH_CAROUSEL_DATA_SUCCESS,
    FETCH_CAROUSEL_DATA_ERROR,
} from '../actions/carousel'

const initialState = {
    data: {
        holiday: {
            search: null,
            gifts: []
        },
        recipient: {
            search: null,
            gifts: []
        }
    },
    holidays: [
        "Christmas/Hanukkah",
        `Valentine's Day`,
        "Father's/Mother's Day",
        "Birthday",
        "Spontaneous",
        "Anniversary",
        "Easter"
    ],
    recipients: [
        "Boyfriend/Husband",
        "Girlfriend/Wife",
        "Brother/Sister",
        "Father/Mother",
        "Friend",
        "Grandfather/Grandmother",
        "Pet",
        "Son/Daughter"
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CAROUSEL_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                error: null
            })
        case FETCH_CAROUSEL_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state;
    };
};