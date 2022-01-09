import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleAddNote as handleAddNoteDispatch, handleNotionList} from "../../store/actions/NotionListActions";
import * as notionListSelectors from "../../store/selectors/notion_list_selectors"
import * as userSelectors from "../../store/selectors/user_selectors"


function NotionListContainer () {
    const notionList = useSelector(notionListSelectors.all)
    const user = useSelector(userSelectors.user)
    const dispatch = useDispatch();

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

    return <NotionListItem notionList={notionList} handleAddNote={handleAddNote}/>
}

export default  NotionListContainer