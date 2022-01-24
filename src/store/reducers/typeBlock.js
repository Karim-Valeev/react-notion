import { CHOOSE_LINK, CLICK_PLUS, CHOOSE_TEXT } from '../types/typeBlockTypes';

const initialState = {
    active: false,
    activeLinkModal: false,
};

export function typeBlockReducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_PLUS:
            return { ...state, ...action.payload };
        case CHOOSE_LINK:
            return { ...state, ...action.payload };
        case CHOOSE_TEXT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
