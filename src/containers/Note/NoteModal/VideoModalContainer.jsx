import VideoModal from '../../../components/Note/NoteModal/VideoModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import { handleActiveModalVideo } from '../../../store/actions/TypeBlockActions';
import { handleAddVideo, handleUpdateVideoBlock } from '../../../store/actions/NoteBlocksActions';
import { useEffect, useState } from 'react';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';

const defaultState = {
    linkVideo: '',
};

function VideoModalContainer() {
    const activeVideoModal = useSelector(typeBlockSelectors.activeVideoModal);
    const dispatch = useDispatch();
    const block = useSelector(noteBlocksSelector.noteBlock);
    const [data, setData] = useState(defaultState);

    useEffect(async () => {
        if (activeVideoModal && block !== null) {
            setData({
                linkVideo: block.value,
            });
        } else {
            setData(defaultState);
        }
    }, [activeVideoModal, block]);

    const handleClick = (status) => {
        dispatch(handleActiveModalVideo(status));
    };

    const handleVideo = (data) => {
        console.log(data);
        if (block === null) {
            dispatch(handleAddVideo(data.linkVideo));
        } else {
            dispatch(handleUpdateVideoBlock(data.linkVideo));
        }
    };
    return (
        <VideoModal
            activeVideoModal={activeVideoModal}
            data={data}
            handleClick={handleClick}
            handleVideo={handleVideo}
        />
    );
}

export default VideoModalContainer;
