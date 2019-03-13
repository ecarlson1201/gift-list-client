import {
    fetchCarouselDataSuccess,
    fetchCarouselDataError
} from '../../actions/carousel';

import reducer from '../../reducers/carousel';

describe('Carousel reducer', () => {
    it('Should set the inital state when nothing is passed', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' })
        expect(state).toEqual({
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
        });
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });
    describe('Get carousel data', () => {
        it('Should return data when fetch succeeds', () => {
            const data = {
                holiday: {
                    search: "Birthday",
                    gifts: [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
                },
                recipient: {
                    search: "Friend",
                    gifts: [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
                }
            };
            let state;
            state = reducer(state, fetchCarouselDataSuccess(data))
            expect(state.data).toEqual(data)
        });
    });

    describe('Carousel error', () => {
        it('Should throw error if fetch errors', () => {
            const data = "error"
            let state;
            state = reducer(state, fetchCarouselDataError(data));
            expect(state.error).toEqual(data)
        });
    });
});
