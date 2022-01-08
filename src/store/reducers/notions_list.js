import {ACTIVE_NOTION_LIST, GET_NOTION_LIST} from "../actions/NotionListActions";


const initialState = [
    {
        id: 1,
        parentId: null,
        name: 'Primer',
        level: 1,
        active: false,
    },
    {
        id: 2,
        parentId: null,
        name: 'Test',
        active: false,
        level: 1,
        items: [
            {
                id: 3,
                parentId: 2,
                name: 'PrimerNotion',
                active: false,
                level: 2
            },
            {
                id: 4,
                parentId: 2,
                name: 'Test4',
                active: false,
                level: 2
            }
        ]
    },
    {
        id: 6,
        parentId: null,
        name: 'Test6',
        active: false,
        level: 1,
        items: [
            {
                id: 7,
                parentId: 6,
                name: 'PrimerNotion7',
                active: false,
                level: 2,
                items: [
                    {
                        id: 8,
                        parentId: 7,
                        name: 'PrimerNotion8',
                        active: false,
                        level: 3
                    }
                ]
            }
        ]
    },
]

export function notionListReducer(state=initialState,action) {
    switch (action.type) {
        case GET_NOTION_LIST:
            return state
        case ACTIVE_NOTION_LIST:
            return state
        default: return state
    }
}