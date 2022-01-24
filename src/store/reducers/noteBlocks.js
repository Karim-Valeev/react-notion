import { GET_BLOCKS, DELETE_BLOCK } from '../types/noteBlocksTypes';

const initialState = {
    blocks: [],
};

export function noteBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOCKS:
            return action.payload;
        case DELETE_BLOCK:
            return action.payload;
        default:
            return state;
    }
}
