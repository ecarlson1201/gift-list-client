import {
    CLICK_GIFT,
    clickGift
} from '../../actions/click-gift';

describe('clickGift', () => {
    it('Should return the action', () => {
        const clicked = {
            name: "Gift name",
            price: "$0-$20",
            holiday: "Birthday",
            recipient: "Friend",
            description: "It's a gift",
            link: "http://link.com",
            image: "http://image.com",
        };
        const action = clickGift(clicked);
        expect(action.type).toEqual(CLICK_GIFT);
        expect(action.object).toEqual(clicked);
    });
});