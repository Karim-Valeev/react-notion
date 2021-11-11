import AddPageBtn from "./AddPageBtn";
import NotionListContainer from "../../containers/Sidebar/NotionListContainer";
function NoteList () {
    return (<aside className="notion__list">
       <NotionListContainer/>
        <AddPageBtn/>
    </aside>)
}

export default NoteList