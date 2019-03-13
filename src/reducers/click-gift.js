import { CLICK_GIFT } from '../actions/click-gift';

const initialState = {
        name: null,
        price: null,
        holiday: null,
        recipient: null,
        description: null,
        link: null,
        image: null,
        options: [],
        id: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_GIFT:
            return Object.assign({}, state, {
                    name: action.object.name,
                    price: action.object.price,
                    holiday: action.object.holiday,
                    recipient: action.object.recipient,
                    description: action.object.description,
                    link: action.object.link,
                    image: action.object.image,
                    options: action.array,
                    id: action.object._id
            });
        default:
            return state;
    };
};