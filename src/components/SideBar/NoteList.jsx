import AddPageBtnContainer from '../../containers/Sidebar/AddPageBtnContainer';
import NotionListContainer from '../../containers/Sidebar/NotionListContainer';

function NoteList() {
    return (
        <aside className="notion__list">
            <NotionListContainer />
            <AddPageBtnContainer />
        </aside>
    );
}

export default NoteList;
