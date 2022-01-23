import { GET_BLOCKS } from '../types/noteBlocksTypes';

const initialState = {
    blocks: [],
};

export function noteBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOCKS:
            return action.payload;
        default:
            return state;
    }
}
