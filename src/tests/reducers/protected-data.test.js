import {
    fetchProtectedDataSuccess,
    fetchProtectedDataError,
    fetchSearchDataSuccess,
    fetchSearchDataError,
    displaySearchParams
} from '../../actions/protected-data';

import reducer from '../../reducers/protected-data';

describe('Protected-data reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            data: {
                "lists": []
            },
            search: [{ name: "No Results Found" }],
            searchParams: {},
            error: null
        });
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNWON' });
        expect(state).toBe(currentState);
    });
    describe('Fetch data success', () => {
        it('Should return data when fetch succeeds', () => {
            const data = {
                "lists": [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
            };

            let state;
            state = reducer(state, fetchProtectedDataSuccess(data));
            expect(state.data).toEqual(data);
        });
    });
    describe('Protected data error', () => {
        it('Should throw error if fetch errors', () => {
            const data = "error"
            let state;
            state = reducer(state, fetchProtectedDataError(data));
            expect(state.error).toEqual(data);
        });
    });
    describe('Search data success', () => {
        it("Should return search data when fetch succeeds", () => {
            const search = [
                { gift: 1 },
                { gift: 2 },
                { gift: 3 }
            ];
            let state;
            state = reducer(state, fetchSearchDataSuccess(search));
            expect(state.search).toEqual(search);
        });
    });
    describe('Protected search error', () => {
        it('Should throw error if fetch errors', () => {
            const error = "error"
            let state;
            state = reducer(state, fetchSearchDataError(error));
            expect(state.error).toEqual(error);
        });
    });
    describe('Search params success', () => {
        it("Should return search params when fetch succeeds", () => {
            const params = {
                holiday: "Birthday",
                recipient: "Friend",
                price: "$0-$20"
            };
            let state;
            state = reducer(state, displaySearchParams(params));
            expect(state.searchParams).toEqual(params);
        });
    });
});