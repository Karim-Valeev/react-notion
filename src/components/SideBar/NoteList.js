import AddPageBtn from "./AddPageBtn";
import NotionListItem from "./NotionListItem";
function NoteList () {
    return (<aside className="notion__list">
        <NotionListItem/>
        <AddPageBtn/>
    </aside>)
}

export default NoteList