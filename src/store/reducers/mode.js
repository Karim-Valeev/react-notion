import { CHOOSE_MODE } from '../types/modeTypes';

const initialState = {
    activeEdit: true,
    activeView: false,
};

export function modeReducers(state = initialState, action) {
    switch (action.type) {
        case CHOOSE_MODE:
            return action.payload;
        default:
            return state;
    }
}
