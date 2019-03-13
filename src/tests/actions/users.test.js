import { registerUser } from '../../actions/users'
import { API_BASE_URL } from '../../config'

describe('fetchBoard', () => {
    it('Should dispatch fetchBoardSuccess', () => {
        const board = {
            data: { lists: [] }

        }

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return board
                }
            })
        )

        const dispatch = jest.fn()
        return registerUser()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {
                'body': undefined,
                'headers': { 'content-type': 'application/json' },
                'method': 'POST'
            })
        })
    })
})