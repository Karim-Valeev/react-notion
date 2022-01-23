import LinkBlockModal from "../../../components/Note/NoteModal/LinkBlockModal";
import {useDispatch, useSelector} from "react-redux";
import * as typeBlockSelectors from "../../../store/selectors/typeBlock_selectors";
import {handleActiveModalLink} from "../../../store/actions/TypeBlockActions";
import {handleAddLinkBlock} from "../../../store/actions/NoteBlocksActions";
function LinkBlockModalContainer () {
    const activeLinkModal = useSelector(typeBlockSelectors.activeLinkModal)
    const dispatch = useDispatch()

    const handleClick = (status) => {
        dispatch(handleActiveModalLink(status))
    }

    const handleLink = (data) => {
        console.log(data)
        dispatch(handleAddLinkBlock(data))
    }

    return <LinkBlockModal activeLinkModal={activeLinkModal} handleClick={handleClick} handleLink={handleLink}/>
}

export default LinkBlockModalContainer