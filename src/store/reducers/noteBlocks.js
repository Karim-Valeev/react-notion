import { CURRENT_BLOCK, GET_BLOCKS, DELETE_BLOCK } from '../types/noteBlocksTypes';

const initialState = {
    blocks: [],
    block: null,
};

export function noteBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOCKS:
            return { ...state, ...action.payload };
        case CURRENT_BLOCK:
            return { ...state, ...action.payload };
        case DELETE_BLOCK:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
