import NoteLayout from "../components/Layout/NoteLayout";
import SideBar from "../components/Layout/SideBar";
function Notion () {
    return <main id="notion-app">
            <div className="notion-app--inner notion-app--main">
                <SideBar/>
                <NoteLayout/>
            </div>
        </main>
}

export default Notion