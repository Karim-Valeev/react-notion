import { CHOOSE_DOTS, CHOOSE_IMAGE, CHOOSE_LINK, CLICK_PLUS, CHOOSE_TEXT, CHOOSE_VIDEO } from '../types/typeBlockTypes';

const initialState = {
    active: false,
    activeLinkModal: false,
    activeImageModal: {
        active: false,
        activeUpload: true,
        activeLink: false,
    },
    activeDotsModal: false,
    activeVideoModal: false,
};

export function typeBlockReducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_PLUS:
        case CHOOSE_LINK:
        case CHOOSE_TEXT:
        case CHOOSE_IMAGE:
        case CHOOSE_DOTS:
        case CHOOSE_VIDEO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
