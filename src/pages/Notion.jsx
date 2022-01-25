import NoteLayout from '../components/Layout/NoteLayout';
import SideBar from '../components/Layout/SideBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as noteSelectors from '../store/selectors/note_selectors';
import { handleNote } from '../store/actions/NoteActions';
import NoteTopBar from '../components/Note/NoteTopBar';
import NoteEmptyTopBar from '../components/Note/NoteEmptyTopBar';
import Loader from '../components/Loaders/Loader';
import NoteFrame from '../components/Note/NoteBody/NoteFrame';
import NoteModal from '../components/Note/NoteModal/NoteModal';
import { handleGetBlocks } from '../store/actions/NoteBlocksActions';
import { handleActiveMode } from '../store/actions/ModeActions';

function Notion(props) {
    const note = useSelector(noteSelectors.note);
    const load = useSelector(noteSelectors.load);
    const dispatch = useDispatch();

    useEffect(async () => {
        if (props.location.search === '?mode=edit') {
            dispatch(handleActiveMode({ activeEdit: true, activeView: false }));
        } else if (props.location.search === '?mode=view') {
            dispatch(handleActiveMode({ activeEdit: false, activeView: true }));
        }
        if (props.match.params.id !== undefined) {
            await dispatch(handleNote(props.match.params.id));
            await dispatch(handleGetBlocks());
        }
    }, [props.match.params.id]);

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
                <NoteModal />
            </div>
        </main>
    );
}

export default Notion;
