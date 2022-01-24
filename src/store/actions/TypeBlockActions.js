import {CHOOSE_IMAGE, CHOOSE_LINK, CLICK_PLUS} from "../types/typeBlockTypes";


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

export function handleActiveModalImage (status) {
    return function (dispatch) {
        dispatch({
            type: CHOOSE_IMAGE,
            payload: {active: false, activeImageModal: status}
        })
    }
}