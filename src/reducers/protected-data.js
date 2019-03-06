import {
    ADD_GIFT_LIST,
    SAVE_GIFT,
    DELETE_GIFT_LIST,
    DELETE_GIFT,
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data'

const initialState = {
    data: {
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
                        "link": "https://fcgoods.com",
                        "image": "https://cdn.shopify.com/s/files/1/0043/9252/products/the-bifold-wallet-tan-2.jpg?v=1488056566"
                    }
                ]
            },
            {
                "title": "Chantal",
                "gifts": [
                    {
                        "name": "Ski jacket",
                        "price": "$100 - $250",
                        "holiday": "birthday",
                        "recipient": "girlfriend/wife",
                        "description": "I found a great deal on an awesome jacket...",
                        "link": "https://rei.com",
                        "image": 'https://www.hellyhansen.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/6/5/65542-001.jpg'
                    },
                    {
                        "name": "Chocolate",
                        "price": "$1 - $20",
                        "holiday": "Christmas",
                        "recipient": "girlfriend/wife",
                        "description": "I found the best chocolates that my girlfriend...",
                        "link": "https://chocolate.com",
                        "image": 'https://www.history.com/.image/t_share/MTU3ODc4NjAyOTgyNjk2Njcx/hungry-sweet-chocolate-istock_000027210034large-2.jpg'
                    },
                    {
                        "name": "SpongeBob doll",
                        "price": "$50 - $100",
                        "holiday": "Anniversary",
                        "recipient": "girlfriend/wife",
                        "description": "I wanted to do something special this anniversary...",
                        "link": "https://datenight.com",
                        "image": 'https://media.exhibia.com/items/spongebob_4Z2J0xI.jpg'
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
                        "link": "https://harrypotter.com",
                        "image": 'https://images-na.ssl-images-amazon.com/images/I/61NB5Aa6YZL._UX679_.jpg'
                    },
                    {
                        "name": "Hockey Pads",
                        "price": "$50 - $100",
                        "holiday": "Christmas",
                        "recipient": "sister",
                        "description": "I was searching for ideas for my sister who plays hockey...",
                        "link": "https://hockeypads.com",
                        "image": 'https://www.dickssportinggoods.com/wcsstore/DicksSportingGoods/Attachment/Asset/CategoryImages/ShopBySport/Hockey/YouthHockeyPackages/YouthHockeyPackages.jpg'
                    },
                    {
                        "name": "Reading Light",
                        "price": "$1 - $20",
                        "holiday": "Christmas",
                        "recipient": "sister",
                        "description": "My sister loves to read before she goes to bed at night...",
                        "link": "https://readinglight.com",
                        "image": 'https://images-na.ssl-images-amazon.com/images/I/61S6wIosxAL._SX466_.jpg'
                    }
                ]
            }
        ]
    },
    error: null
};

export default function reducer(state = initialState, action) {
    function arrayRemove(arr, value) {
        return arr.filter(function (ele, index) {
            return index !== value;
        });
    };

    let listIndex;
    const listCheck = function () {
        return state.lists.forEach((val, index) => {
            if (state.lists[index].title === action.title) {
                listIndex = index;
            };
        });
    };

    switch (action.type) {
        case FETCH_PROTECTED_DATA_SUCCESS:
        console.log(action)
            return Object.assign({}, state, {
                data: action.data,
                error: null
            })
        case FETCH_PROTECTED_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            })
        case ADD_GIFT_LIST:
            return Object.assign({}, state, {
                lists: [...state.data.lists, {
                    title: action.title,
                    gifts: []
                }]
            });

        case DELETE_GIFT_LIST:
            return Object.assign({}, state, {
                lists: arrayRemove(state.data.lists, action.index)
            });

        case DELETE_GIFT:
            listCheck();
            return Object.assign({}, state, {
                lists: [
                    ...state.data.lists.slice(0, listIndex),
                    {
                        ...state.lists[listIndex],
                        gifts: arrayRemove([...state.data.lists[listIndex].gifts], action.gift),
                    },
                    ...state.data.lists.slice(listIndex + 1)
                ]
            });

        case SAVE_GIFT:
            listCheck();
            return Object.assign({}, state, {
                lists: [
                    ...state.data.lists.slice(0, listIndex),
                    {
                        ...state.data.lists[listIndex],
                        gifts: [...state.data.lists[listIndex].gifts, action.gift]
                    },
                    ...state.data.lists.slice(listIndex + 1)
                ]
            });

        default:
            return state;
    };
};