import AddPageBtn from '../../components/SideBar/AddPageBtn';
import { handleAddNote } from '../../store/actions/NotionListActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../../store/selectors/user_selectors';

function AddPageBtnContainer() {
    const user = useSelector(userSelectors.user);
    const dispatch = useDispatch();
    const handleClick = () => {
        const data = {
            author: user.uid,
            title: 'Untitled',
            parentId: null,
            text: '',
            level: 1,
        };
        dispatch(handleAddNote(data));
    };

    return <AddPageBtn handleClick={handleClick} />;
}

export default AddPageBtnContainer;
