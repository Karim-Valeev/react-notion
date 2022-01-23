import TypeBlockModal from "../../../components/Note/NoteModal/TypeBlockModal";
import {useDispatch, useSelector} from "react-redux";
import * as typeBlockSelectors from "../../../store/selectors/typeBlock_selectors";
import {handleActiveTypeBlock} from "../../../store/actions/TypeBlockActions";


function TypeBlockModalContainer () {
    const active = useSelector(typeBlockSelectors.active)
    const dispatch = useDispatch()
    const handleClick = (status) => {
      dispatch(handleActiveTypeBlock(status))
    }
    return <TypeBlockModal active={active} handleClick={handleClick}/>
}

export default TypeBlockModalContainer