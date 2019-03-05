import {
    ADD_GIFT_LIST,
    SAVE_GIFT,
    DELETE_GIFT_LIST,
    DELETE_GIFT,
    CLICK_GIFT
} from '../actions/protected-data'

const initialState = {
    "clicked": {
        "name": null,
        "price": null,
        "holiday": null,
        "recipient": null,
        "description": null,
        "link": null,
        "image": null,
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
    ],
    carouselData: [
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
    }

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

        case CLICK_GIFT:
            return Object.assign({}, state, {
                clicked: {
                    name: action.object.name,
                    price: action.object.price,
                    holiday: action.object.holiday,
                    recipient: action.object.recipient,
                    description: action.object.description,
                    link: action.object.link,
                    image: action.object.image,
                    options: action.array
                }
            });

        case DELETE_GIFT:
            listCheck();
            return Object.assign({}, state, {
                lists: [
                    ...state.lists.slice(0, listIndex),
                    {
                        ...state.lists[listIndex],
                        gifts: arrayRemove([...state.lists[listIndex].gifts], action.gift),
                    },
                    ...state.lists.slice(listIndex + 1)
                ]
            });

        case SAVE_GIFT:
            listCheck();
            return Object.assign({}, state, {
                lists: [
                    ...state.lists.slice(0, listIndex),
                    {
                        ...state.lists[listIndex],
                        gifts: [...state.lists[listIndex].gifts, action.gift]
                    },
                    ...state.lists.slice(listIndex + 1)
                ]
            });

        default:
            return state;
    };
};