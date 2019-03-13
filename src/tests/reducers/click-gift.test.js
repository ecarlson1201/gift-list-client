import { clickGift } from '../../actions/click-gift';
import reducer from '../../reducers/click-gift';

describe('Click gift reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: "__UNKNOWN" });
        expect(state).toEqual({
            name: null,
            price: null,
            holiday: null,
            recipient: null,
            description: null,
            link: null,
            image: null,
            options: [],
            id: null
        });
    });
    it('Should return the current state of an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });
    describe('Set clicked', () => {
        it('Should set clicked state upon success', () => {
            const clicked = {
                name: "Gift name",
                price: "$0-$20",
                holiday: "Birthday",
                recipient: "Friend",
                description: "It's a gift",
                link: "http://link.com",
                image: "http://image.com",
            };
            let state;
            state = reducer(state, clickGift(clicked));
            expect(state).toEqual(clicked);
        });
    });
});

