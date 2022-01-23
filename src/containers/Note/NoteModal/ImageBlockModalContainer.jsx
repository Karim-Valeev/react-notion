import ImageBlockModal from "../../../components/Note/NoteModal/ImageBlockModal";
import * as typeBlockSelectors from "../../../store/selectors/typeBlock_selectors";
import {useDispatch, useSelector} from "react-redux";
import {handleActiveModalImage} from "../../../store/actions/TypeBlockActions";
import {handleAddImageBlock} from "../../../store/actions/NoteBlocksActions";

function ImageBlockModalContainer () {
    const activeImageModal = useSelector(typeBlockSelectors.activeImageModal)
    const dispatch = useDispatch()

    const handleClick = (status) => {
        dispatch(handleActiveModalImage(status))
    }

    const handleImage = (data) => {
        const payload = {
            type: data.linkPhoto !== '' ? 'linkPhoto' : 'file',
            value: data.linkPhoto !== '' ? data.linkPhoto : data.photo
        }
        dispatch(handleAddImageBlock(payload))
    }

    return <ImageBlockModal activeImageModal={activeImageModal} handleClick={handleClick} handleImage={handleImage}/>
}

export default ImageBlockModalContainer