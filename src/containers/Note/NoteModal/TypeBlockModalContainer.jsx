import TypeBlockModal from "../../../components/Note/NoteModal/TypeBlockModal";
import {useDispatch, useSelector} from "react-redux";
import * as typeBlockSelectors from "../../../store/selectors/typeBlock_selectors";
import {handleActiveModalLink, handleActiveTypeBlock} from "../../../store/actions/TypeBlockActions";


function TypeBlockModalContainer () {
    const active = useSelector(typeBlockSelectors.active)
    const dispatch = useDispatch()
    const handleClick = (status) => {
      dispatch(handleActiveTypeBlock(status))
    }

    const handleActiveTypeLink = (status) => {
        dispatch(handleActiveModalLink(status))
    }
    return <TypeBlockModal active={active} handleClick={handleClick} handleActiveTypeLink={handleActiveTypeLink}/>
}

export default TypeBlockModalContainer