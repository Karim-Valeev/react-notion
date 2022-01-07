import NoteLayout from "../components/Layout/NoteLayout";
import SideBar from "../components/Layout/SideBar";
import {auth} from "../firebase/auth";


function Notion () {
    // на будущее
    const logout = () => {
        auth.signOut();
    };

    return <main id="notion-app">
            <div className="notion-app--inner notion-app--main">
                <SideBar/>
                <NoteLayout/>
            </div>
        </main>
}

export default Notion