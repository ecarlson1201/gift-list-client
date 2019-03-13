import {
    FETCH_CAROUSEL_DATA_SUCCESS,
    FETCH_CAROUSEL_DATA_ERROR,
    fetchCarouselDataSuccess,
    fetchCarouselDataError
} from '../../actions/carousel';

describe('fetchCarouselDataSuccess', () => {
    it('Should return the action', () => {
        let data = {
            holiday: {
                search: "new holiday",
                gifts: [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
            },
            recipient: {
                search: "new recipient",
                gifts: [{ gift: 1 }, { gift: 2 }, { gift: 3 }]
            }
        };
        const action = fetchCarouselDataSuccess(data);
        expect(action.type).toEqual(FETCH_CAROUSEL_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchCarouselDataError', () => {
    it('Should return the action', () => {
        const error = 'error';
        const action = fetchCarouselDataError(error);
        expect(action.type).toEqual(FETCH_CAROUSEL_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});