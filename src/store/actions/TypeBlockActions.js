import { CHOOSE_DOTS, CHOOSE_IMAGE, CHOOSE_LINK, CLICK_PLUS, CHOOSE_TEXT } from '../types/typeBlockTypes';

export function handleActiveTypeBlock(status) {
    return function (dispatch) {
        dispatch({
            type: CLICK_PLUS,
            payload: { active: status },
        });
    };
}

export function handleActiveModalLink(status) {
    return function (dispatch) {
        dispatch({
            type: CHOOSE_LINK,
            payload: { active: false, activeLinkModal: status },
        });
    };
}

export function handleActiveModalImage(status) {
    return function (dispatch) {
        dispatch({
            type: CHOOSE_IMAGE,
            payload: { active: false, activeImageModal: status },
        });
    };
}

export function handleActiveDotsModal(status) {
    return function (dispatch) {
        dispatch({
            type: CHOOSE_DOTS,
            payload: { active: false, activeDotsModal: status },
        });
    };
}

export function handleActiveModalText(status) {
    return function (dispatch) {
        console.log('In handleActiveModalText');
        dispatch({
            type: CHOOSE_TEXT,
            payload: { active: false, activeTextModal: status },
        });
    };
}
