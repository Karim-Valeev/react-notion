import {GET_BLOCKS} from "../types/noteBlocksTypes";
import BlockDataService from "../../services/block.service";
import NoteDataService from "../../services/note.service";
import DataStorageImages from "../../firebase/storage"
import {handleActiveModalImage, handleActiveModalLink} from "./TypeBlockActions";
import {handleNotionList} from "./NotionListActions";


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
        await BlockDataService.createLink({noteId: note.id, author: uid, link: payload.name, linkId: keyNote})
        const blocks = await BlockDataService.getBlocks(note.id)

        dispatch({
            type: GET_BLOCKS,
            payload: {blocks}
        })

        dispatch(handleActiveModalLink(false))
        dispatch(handleNotionList({uid}))
    }
}

export function handleAddImageBlock (payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;

        const newBlock = await BlockDataService.createImage({noteId: note.id, author: uid,type: payload.type, value: payload.value})
        if (payload.type === 'file') {
            await DataStorageImages.upload({key: newBlock, value: payload.value})
        }
        const blocks = await BlockDataService.getBlocks(note.id)

        dispatch({
            type: GET_BLOCKS,
            payload: {blocks}
        })

        dispatch(handleActiveModalImage({active:false, activeUpload: true, activeLink: false}))
    }
}