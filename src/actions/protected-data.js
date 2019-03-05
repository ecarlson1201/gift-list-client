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

export const CLICK_GIFT = "CLICK_GIFT";
export const clickGift = (object, array) => ({
    type: CLICK_GIFT,
    object,
    array
});