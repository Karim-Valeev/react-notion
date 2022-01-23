import {GET_BLOCKS} from "../types/noteBlocksTypes";
import BlockDataService from "../../services/block.service";
import NoteDataService from "../../services/note.service";


export function handleGetBlocks () {
    return async function (dispatch, getState) {
        const note = getState().note?.note;
        const blocks = await BlockDataService.getBlocks(note.id)
        dispatch({
            type: GET_BLOCKS,
            payload: {blocks}
        })
    }
}

export function handleAddLinkBlock (payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;
        const keyNote = await NoteDataService.create({
            author: uid,
            title: payload.name,
            parentId: note.id,
            level: note.level + 1,
        })
        await BlockDataService.createLink({note, uid, link: payload.name, linkId: keyNote})
        const blocks = await BlockDataService.getBlocks(note.id)

        dispatch({
            type: GET_BLOCKS,
            payload: {blocks}
        })
    }
}