import { ACTION_BURGER } from '../types/burgerTypes';

const initialState = {
    active: false,
};

export function burgerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_BURGER:
            return action.payload;
        default:
            return state;
    }
}
