import {
    ADD_GIFT_LIST,
    SAVE_GIFT,
    DELETE_GIFT_LIST,
    DELETE_GIFT,
    CLICK_GIFT
} from '../actions/index'

const initialState = {
    "clicked": {
        "name": null,
        "price": null,
        "holiday": null,
        "recipient": null,
        "description": null,
        "link": null,
        "options": []
    },
    "user": "userId",
    "lists": [
        {
            "title": "Dad",
            "gifts": [
                {
                    "name": "custom wallet",
                    "price": "$50 - $100",
                    "holiday": "birthday",
                    "recipient": "father/mother",
                    "description": "I was searching for ideas for my boyfriend who loves baseball...",
                    "link": "https://fcgoods.com"
                }
            ]
        },
        {
            "title": "Chantal",
            "gifts": [
                {
                    "name": "Sky jacket",
                    "price": "$100 - $250",
                    "holiday": "birthday",
                    "recipient": "girlfriend/wife",
                    "description": "I found a great deal on an awesome jacket...",
                    "link": "https://rei.com"
                },
                {
                    "name": "Chocolate",
                    "price": "$1 - $20",
                    "holiday": "Christmas",
                    "recipient": "girlfriend/wife",
                    "description": "I found the best chocolates that my girlfriend...",
                    "link": "https://chocolate.com"
                },
                {
                    "name": "custom wallet",
                    "price": "$50 - $100",
                    "holiday": "Anniversary",
                    "recipient": "girlfriend/wife",
                    "description": "I wanted to do something special this anniversary...",
                    "link": "https://datenight.com"
                }
            ]
        },
        {
            "title": "Lisa",
            "gifts": [
                {
                    "name": "Harry Potter Wand",
                    "price": "$50 - $100",
                    "holiday": "birthday",
                    "recipient": "brother/sister",
                    "description": "I was searching for ideas for my sister who loves Harry Potter...",
                    "link": "https://harrypotter.com"
                },
                {
                    "name": "Hockey Pads",
                    "price": "$50 - $100",
                    "holiday": "Christmas",
                    "recipient": "sister",
                    "description": "I was searching for ideas for my sister who plays hockey...",
                    "link": "https://hockeypads.com"
                },
                {
                    "name": "Reading Light",
                    "price": "$1 - $20",
                    "holiday": "Christmas",
                    "recipient": "sister",
                    "description": "My sister loves to read before she goes to bed at night...",
                    "link": "https://readinglight.com"
                }
            ]
        }
    ]
};

export default (state = initialState, action) => {
    function arrayRemove(arr, value) {
        return arr.filter(function (ele, index) {
            return index !== value;
        });
    };

    switch (action.type) {

        case ADD_GIFT_LIST:
            return Object.assign({}, state, {
                lists: [...state.lists, {
                    title: action.title,
                    gifts: []
                }]
            });

        case DELETE_GIFT_LIST:
            return Object.assign({}, state, {
                lists: arrayRemove(state.lists, action.index)
            });

        case DELETE_GIFT:
            let listsAfterDelete = state.lists.reduce((acc, val, index) => {
                if (state.lists[index].title === action.title) {
                    acc[index].gifts.splice(action.gift, 1)
                };
                return acc
            }, state.lists)
            return Object.assign({}, state, {
                lists: listsAfterDelete
            });

        case SAVE_GIFT:
            let newLists = state.lists.reduce((acc, val, index) => {
                if (state.lists[index].title === action.title) {
                    return [...state.lists[index].gifts,
                    action.gift
                    ];
                };
                return acc;
            }, state.lists);
            return Object.assign({}, state, {
                lists: newLists
            });

        case CLICK_GIFT:
            return Object.assign({}, state, {

            });

        default:
            return state;
    };
};