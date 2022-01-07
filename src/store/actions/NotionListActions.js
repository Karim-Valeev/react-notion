export const GET_NOTION_LIST = 'GET_NOTION_LIST'
export const ACTIVE_NOTION_LIST = 'ACTIVE_NOTION_LIST'
export function handleNotionList () {
    return function (dispatch) {
        dispatch({
            type: GET_NOTION_LIST
        })
    }
}

export function handleActiveNotionList (id, parentId, level) {
    return function (dispatch) {
        dispatch({ type: ACTIVE_NOTION_LIST, payload: {id, parentId, level} })
    }
}
