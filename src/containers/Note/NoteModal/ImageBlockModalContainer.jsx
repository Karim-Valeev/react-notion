import ImageBlockModal from '../../../components/Note/NoteModal/ImageBlockModal';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';
import { useDispatch, useSelector } from 'react-redux';
import { handleActiveModalImage } from '../../../store/actions/TypeBlockActions';
import {
    handleAddImageBlock,
    handleDownloadUrl,
    handleUpdateImageBlock,
} from '../../../store/actions/NoteBlocksActions';
import { useEffect, useState } from 'react';

const defaultState = {
    photo: '',
    linkPhoto: '',
};

function ImageBlockModalContainer() {
    const activeImageModal = useSelector(typeBlockSelectors.activeImageModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const dispatch = useDispatch();
    const [data, setData] = useState(defaultState);

    const handleClick = (status) => {
        dispatch(handleActiveModalImage(status));
    };

    const handleImage = (data) => {
        const payload = {
            type: data.linkPhoto !== '' ? 'linkPhoto' : 'file',
            value: data.linkPhoto !== '' ? data.linkPhoto : data.photo,
        };
        if (block === null) {
            dispatch(handleAddImageBlock(payload));
        } else {
            dispatch(handleUpdateImageBlock(payload));
        }
    };

    useEffect(async () => {
        if (activeImageModal.active && block !== null) {
            if (activeImageModal.activeLink) {
                setData({
                    photo: '',
                    linkPhoto: block.value,
                });
            } else {
                const getFileUrl = await handleDownloadUrl(block);
                await setData({
                    photo: getFileUrl,
                    linkPhoto: '',
                });
            }
        } else {
            setData(defaultState);
        }
    }, [block, activeImageModal.active]);

    return (
        <ImageBlockModal
            activeImageModal={activeImageModal}
            data={data}
            handleClick={handleClick}
            handleImage={handleImage}
        />
    );
}

export default ImageBlockModalContainer;
