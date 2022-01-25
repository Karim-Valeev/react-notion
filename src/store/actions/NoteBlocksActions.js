import { CURRENT_BLOCK, DELETE_BLOCK, GET_BLOCKS } from '../types/noteBlocksTypes';
import BlockDataService from '../../services/block.service';
import NoteDataService from '../../services/note.service';
import DataStorageImages from '../../firebase/storage';
import {
    handleActiveDotsModal,
    handleActiveModalImage,
    handleActiveModalLink,
    handleActiveModalText,
    handleActiveModalVideo,
} from './TypeBlockActions';
import { handleNotionList } from './NotionListActions';

export function handleGetBlocks() {
    return async function (dispatch, getState) {
        const note = getState().note?.note;
        let blocks = [];
        if (Object.keys(note).length !== 0) {
            blocks = await BlockDataService.getBlocks(note.id);
        }
        dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });
    };
}

export function handleAddLinkBlock(payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;
        const keyNote = await NoteDataService.create({
            author: uid,
            title: payload.name,
            parentId: note.id,
            level: note.level + 1,
        });
        await BlockDataService.createLink({ noteId: note.id, author: uid, link: payload.name, linkId: keyNote });
        const blocks = await BlockDataService.getBlocks(note.id);

        dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalLink(false));
        dispatch(handleNotionList({ uid }));
    };
}

export function handleAddTextBlock(payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;

        await BlockDataService.createText({ noteId: note.id, author: uid, text: payload });
        const blocks = await BlockDataService.getBlocks(note.id);
        dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalText(false));
    };
}

export function handleDeleteBlock(block) {
    return async function (dispatch) {
        const blocks = await BlockDataService.deleteBlock(block);
        dispatch({
            type: DELETE_BLOCK,
            payload: { blocks },
        });
    };
}

export function handleAddImageBlock(payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;

        const newBlock = await BlockDataService.createImage({
            noteId: note.id,
            author: uid,
            type: payload.type,
            value: payload.value,
        });
        if (payload.type === 'file') {
            await DataStorageImages.upload({ key: newBlock, value: payload.value });
        }
        const blocks = await BlockDataService.getBlocks(note.id);

        dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalImage({ active: false, activeUpload: true, activeLink: false }));
    };
}

export function handleUpdateImageBlock(payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;
        const block = getState().noteBlocks?.block;
        await BlockDataService.updateImageBlock({
            blockId: block.id,
            noteId: note.id,
            author: uid,
            type: payload.type,
            value: payload.value,
            created_at: block.created_at,
        });
        if (payload.type === 'file') {
            await DataStorageImages.upload({ key: block.id, value: payload.value });
        }
        const blocks = await BlockDataService.getBlocks(note.id);

        await dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalImage({ active: false, activeUpload: true, activeLink: false }));
    };
}

export function handleAddVideo(payload) {
    return async function (dispatch, getState) {
        const uid = getState().user?.uid;
        const note = getState().note?.note;

        await BlockDataService.createVideo({
            noteId: note.id,
            author: uid,
            value: payload,
        });

        const blocks = await BlockDataService.getBlocks(note.id);

        await dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalVideo(false));
    };
}

export function handleDownloadUrl(block) {
    return DataStorageImages.getDownloadUrl(block);
}

export function handleActiveBlock(block) {
    return function (dispatch) {
        dispatch({
            type: CURRENT_BLOCK,
            payload: { block },
        });
    };
}

export function handleBlockUpdate(block) {
    return async function (dispatch) {
        dispatch(handleActiveDotsModal(false));
        switch (block.type) {
            case 'text':
                dispatch(handleActiveModalText(true));
                break;
            case 'imageLink':
                dispatch(
                    handleActiveModalImage({
                        active: true,
                        activeUpload: false,
                        activeLink: true,
                    })
                );
                break;
            case 'imageFile':
                dispatch(
                    handleActiveModalImage({
                        active: true,
                        activeUpload: true,
                        activeLink: false,
                    })
                );
                break;
            case 'video':
                dispatch(handleActiveModalVideo(true));
                break;
        }
    };
}

export function handleUpdateTextBlock(payload) {
    return async function (dispatch, getState) {
        const note = getState().note?.note;
        const block = getState().noteBlocks?.block;
        await BlockDataService.updateText({ blockId: block.id, value: payload });
        const blocks = await BlockDataService.getBlocks(note.id);

        await dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalText(false));
    };
}

export function handleUpdateVideoBlock(payload) {
    return async function (dispatch, getState) {
        const note = getState().note?.note;
        const block = getState().noteBlocks?.block;
        await BlockDataService.updateVideo({ blockId: block.id, value: payload });
        const blocks = await BlockDataService.getBlocks(note.id);

        await dispatch({
            type: GET_BLOCKS,
            payload: { blocks },
        });

        dispatch(handleActiveModalVideo(false));
    };
}
