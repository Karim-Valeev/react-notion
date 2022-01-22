import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {
    handleAddNote as handleAddNoteDispatch,
    handleDeleteNote,
    handleNotionList
} from "../../store/actions/NotionListActions";
import * as notionListSelectors from "../../store/selectors/notion_list_selectors"
import * as userSelectors from "../../store/selectors/user_selectors"
import * as noteSelectors from "../../store/selectors/note_selectors"
import LoaderNotionList from "../../components/Loaders/LoaderNotionList";
import {useHistory} from "react-router-dom";


function NotionListContainer () {
    const notionList = useSelector(notionListSelectors.notionList)
    const note = useSelector(noteSelectors.note)
    const load = useSelector(notionListSelectors.load)
    const user = useSelector(userSelectors.user)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect( () => {
         dispatch(handleNotionList(user))
    }, [user, dispatch])

    const handleAddNote = (data) => {
        const resData = {
            parentId: data.id,
            title: 'Untitled',
            author: user.uid,
            text: '',
            level: data.level + 1
        }
        dispatch(handleAddNoteDispatch(resData))
    }

    const handleDelete = (data) => {
        dispatch(handleDeleteNote([{...data, author: user.uid}]))
        if (note?.id === data.id) {
            history.push('/')
        }
    }

    return (load) ?  <LoaderNotionList/> : <NotionListItem notionList={notionList} note={note} handleAddNote={handleAddNote} handleDelete={handleDelete}/>
}

export default  NotionListContainer