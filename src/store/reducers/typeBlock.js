import {CLICK_PLUS} from "../types/typeBlockTypes";

const initialState = {
    active: false
}

export function typeBlockReducer (state=initialState, action) {
    switch (action.type) {
        case CLICK_PLUS:
            return action.payload
        default:
            return state
    }
}