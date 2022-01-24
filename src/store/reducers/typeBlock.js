import { CHOOSE_DOTS, CHOOSE_IMAGE, CHOOSE_LINK, CLICK_PLUS } from '../types/typeBlockTypes';

const initialState = {
    active: false,
    activeLinkModal: false,
    activeImageModal: {
        active: false,
        activeUpload: true,
        activeLink: false,
    },
    activeDotsModal: false,
};

export function typeBlockReducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_PLUS:
            return { ...state, ...action.payload };
        case CHOOSE_LINK:
            return { ...state, ...action.payload };
        case CHOOSE_IMAGE:
            return { ...state, ...action.payload };
        case CHOOSE_DOTS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
