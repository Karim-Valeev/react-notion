import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NotionListItem from '../../components/SideBar/NotionListItem';
import {
    handleAddNote as handleAddNoteDispatch,
    handleDeleteNote,
    handleNotionList,
} from '../../store/actions/NotionListActions';
import * as notionListSelectors from '../../store/selectors/notion_list_selectors';
import * as userSelectors from '../../store/selectors/user_selectors';
import LoaderNotionList from '../../components/Loaders/LoaderNotionList';

function NotionListContainer() {
    const notionList = useSelector(notionListSelectors.notionList);
    const load = useSelector(notionListSelectors.load);
    const user = useSelector(userSelectors.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleNotionList(user));
    }, [user, dispatch]);

    const handleAddNote = (data) => {
        const resData = {
            parentId: data.id,
            title: 'Untitled',
            author: user.uid,
            text: '',
            level: data.level + 1,
        };
        dispatch(handleAddNoteDispatch(resData));
    };

    const handleDelete = (data) => {
        dispatch(handleDeleteNote([{ ...data, author: user.uid }]));
    };

    return load ? (
        <LoaderNotionList />
    ) : (
        <NotionListItem notionList={notionList} handleAddNote={handleAddNote} handleDelete={handleDelete} />
    );
}

export default NotionListContainer;
