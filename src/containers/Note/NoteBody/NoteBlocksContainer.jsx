import NoteBlockItem from "../../../components/Note/NoteBody/NoteBlockItem";
import {useSelector} from "react-redux";
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors'

function NoteBlocksContainer () {
    const noteBlocks = useSelector(noteBlocksSelector.noteBlocks)

    return <NoteBlockItem noteBlocks={noteBlocks}/>
}

export default NoteBlocksContainer