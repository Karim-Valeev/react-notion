import NoteList from "../SideBar/NoteList";
import ProfileContainer from "../../containers/Sidebar/ProfileContainer";

function SideBar () {
    return <div className="notion__sidebar">
       <ProfileContainer/>
       <NoteList/>
    </div>
}

export default SideBar