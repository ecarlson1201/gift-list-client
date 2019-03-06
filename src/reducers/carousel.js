import {
    FETCH_CAROUSEL_DATA_SUCCESS,
    FETCH_CAROUSEL_DATA_ERROR
} from '../actions/carousel'

const initialState = {
    data: [
        {
            title: "Christmas",
            gifts: [
                {
                    "name": "Christmas Gift 1",
                    "price": "$50 - $100",
                    "holiday": "Christmas",
                    "recipient": "sister",
                    "description": "I was searching for ideas for my sister who plays hockey...",
                    "link": "https://hockeypads.com",
                    "image": 'https://images-na.ssl-images-amazon.com/images/I/714sC228uPL._SY355_.png'
                },
                {
                    "name": "Christmas Gift 2",
                    "price": "$1 - $20",
                    "holiday": "Christmas",
                    "recipient": "sister",
                    "description": "My sister loves to read before she goes to bed at night...",
                    "link": "https://readinglight.com",
                    "image": 'https://parkinsonsnewstoday.com/wp-content/uploads/2018/11/shutterstock_721090267-1000x480-1000x480.jpg'
                },
                {
                    "name": "Christmas Gift 3",
                    "price": "$1 - $20",
                    "holiday": "Christmas",
                    "recipient": "girlfriend/wife",
                    "description": "I found the best chocolates that my girlfriend...",
                    "link": "https://chocolate.com",
                    "image": 'https://cdn.shopify.com/s/files/1/0204/2542/collections/ALL_CHRISTMAS_GIFT_BASKETS.jpg?v=1510599409'
                },
                {
                    "name": "Christmas Gift 4",
                    "price": "$50 - $100",
                    "holiday": "Christmas",
                    "recipient": "girlfriend/wife",
                    "description": "I wanted to do something special this anniversary...",
                    "link": "https://datenight.com",
                    "image": 'https://cdn.shopify.com/s/files/1/0043/9252/products/the-bifold-wallet-tan-2.jpg?v=1488056566'
                },
            ]
        },
        {
            title: "Birthday",
            gifts: [
                {
                    "name": "Birthday Gift 1",
                    "price": "$50 - $100",
                    "holiday": "Birthday",
                    "recipient": "brother/sister",
                    "description": "I was searching for ideas for my sister who loves Harry Potter...",
                    "link": "https://harrypotter.com",
                    "image": 'https://i2.fnp.com/assets/images/custom/birthday-micro/top-categories/cake-desk.jpg'
                },
                {
                    "name": "Birthday Gift 2",
                    "price": "$100 - $250",
                    "holiday": "Birthday",
                    "recipient": "girlfriend/wife",
                    "description": "I found a great deal on an awesome jacket...",
                    "link": "https://rei.com",
                    "image": 'https://www.punchbowl.com/gridfs/fs/4d2e0249f92ea1125d0000ef-1294860874'
                },
                {
                    "name": "Birthday Gift 3",
                    "price": "$50 - $100",
                    "holiday": "Birthday",
                    "recipient": "father/mother",
                    "description": "I was searching for ideas for my boyfriend who loves baseball...",
                    "link": "https://fcgoods.com",
                    "image": 'https://images-na.ssl-images-amazon.com/images/I/91c3p71AUhL._SX355_.jpg'
                },
            ]
        }
    ]
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_CAROUSEL_DATA_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                data: action.data,
                error: null
            })
        case FETCH_CAROUSEL_DATA_ERROR:
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state
    }
};