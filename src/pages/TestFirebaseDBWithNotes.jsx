import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import NoteDataService from '../services/note.service'

const initialState = {
  title: "",
  text: "",
};

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function TestFirebaseDBWithNotes() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const forceUpdate = useForceUpdate(); // Пытался заставить компонент перерндерится чтобы поля пустыми стали

    const saveNote = (event) => {
        event.preventDefault();
        console.log("submission prevented");
        let note = {
            title: title,
            author: localStorage.getItem('uid'),
            text: text,
            url: 'http://localhost:8080',
            parentId: null
        };
        console.log(note)
        NoteDataService.create(note);
    }

    return (
        <div>
            <ul>
                <li>
                    note1
                </li>
                <li>
                    note2
                </li>
                <li>
                    note3
                </li>
            </ul>
            <h2>Create note</h2>
            <form onSubmit={saveNote}>
                <label>Title:</label>
                <div>
                    <input type="text" required className=""
                           placeholder="Enter email here:" onChange={e => setTitle(e.target.value)}/>
                </div>
                <label>Text:</label>
                <div>
                    <input type="text" required className=""
                           placeholder="Enter email here:" onChange={e => setText(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save note
                </button>
            </form>
        </div>

    )
}

export default TestFirebaseDBWithNotes