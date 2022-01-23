import {CLICK_PLUS} from "../types/typeBlockTypes";


export function handleActiveTypeBlock (status) {
    return function (dispatch) {
        dispatch({
            type: CLICK_PLUS,
            payload: {active:status}
        })
    }
}