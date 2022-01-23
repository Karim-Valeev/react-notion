import NoteLayout from '../components/Layout/NoteLayout';
import SideBar from '../components/Layout/SideBar';
import { auth } from '../firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as noteSelectors from '../store/selectors/note_selectors';
import { handleNote } from '../store/actions/NoteActions';
import NoteTopBar from '../components/Note/NoteTopBar';
import NoteEmptyTopBar from '../components/Note/NoteEmptyTopBar';
import Loader from '../components/Loaders/Loader';
import NoteFrame from '../components/Note/NoteBody/NoteFrame';
import NoteModal from "../containers/Note/NoteModal/NoteModal";

function Notion(props) {
    const note = useSelector(noteSelectors.note);
    const load = useSelector(noteSelectors.load);
    const dispatch = useDispatch();

    // на будущее
    const logout = () => {
        auth.signOut();
    };

    useEffect(() => {
        if (props.match.params.id !== undefined) {
            dispatch(handleNote(props.match.params.id));
        }
    }, [props.match.params.id, dispatch, handleNote]);

    return (
        <main id="notion-app">
            <div className="notion-app--inner notion-app--main">
                <SideBar />
                <NoteLayout
                    render={() => {
                        if (props.match.params.id === undefined) {
                            return <NoteEmptyTopBar />;
                        } else if (load) {
                            return <Loader />;
                        } else if (note !== null) {
                            return (
                                <>
                                    <NoteTopBar />
                                    <NoteFrame />
                                </>
                            );
                        }
                    }}
                />
                <NoteModal/>
            </div>
        </main>
    );
}

export default Notion;
