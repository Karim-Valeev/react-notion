import {ACTION_BURGER} from "../actions/BurgerActions";

const initialState = {
    active: false
}

export function burgerReducer (state=initialState, action) {
    switch (action.type) {
        case ACTION_BURGER:
            return action.payload
        default:
            return state
    }

}