export const ADD_GIFT_LIST = 'ADD_GIFT_LIST';
export const addGiftList = title => ({
    type: ADD_GIFT_LIST,
    title
});

export const SAVE_GIFT = 'SAVE_GIFT';
export const saveGift = () => ({
    type: SAVE_GIFT
});

export const DELETE_GIFT_LIST = 'DELETE_GIFT_LIST';
export const deleteGiftList = index => ({
    type: DELETE_GIFT_LIST,
    index
});