import Profile from "../SideBar/Profile";
import NoteList from "../SideBar/NoteList";

function SideBar () {
    return <div className="notion__sidebar">
       <Profile/>
       <NoteList/>
    </div>
}

export default SideBar