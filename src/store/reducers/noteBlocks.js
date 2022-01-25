import { CURRENT_BLOCK, GET_BLOCKS, DELETE_BLOCK } from '../types/noteBlocksTypes';

const initialState = {
    blocks: [],
    block: null,
};

export function noteBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOCKS:
        case CURRENT_BLOCK:
        case DELETE_BLOCK:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
