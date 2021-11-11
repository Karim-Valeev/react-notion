export const GET_NOTION_LIST = 'GET_NOTION_LIST'

export function handleNotionList () {
    return function (dispatch) {
        dispatch({
            type: GET_NOTION_LIST
        })
    }
}
