import AddPageBtn from '../../components/SideBar/AddPageBtn';
import { handleAddNote } from '../../store/actions/NotionListActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../../store/selectors/user_selectors';
import { DEFAULT_NAME_LINK } from '../../constants/typeBlocks';

function AddPageBtnContainer() {
    const user = useSelector(userSelectors.user);
    const dispatch = useDispatch();

    const handleClick = () => {
        const data = {
            author: user.uid,
            title: DEFAULT_NAME_LINK,
            parentId: null,
            text: '',
            level: 1,
        };
        dispatch(handleAddNote(data));
    };

    return <AddPageBtn handleClick={handleClick} />;
}

export default AddPageBtnContainer;
