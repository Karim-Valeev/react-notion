import { firebaseApp } from '../firebase/firebaseApp';
import { db } from '../firebase/db';
import { child, equalTo, get, orderByChild, push, query, ref, remove, set, update } from 'firebase/database';
import { flattenNote, nest } from '../utils/changeState';
import BlockDataService from './block.service';

class NoteDataService {
    constructor() {
        this.noteList = [];
    }

    async getAll() {
        const notesRef = query(ref(db, '/notes/'));
        const value = await get(notesRef);
        this.noteList = Object.entries(value.val()).map(([key, value]) => {
            return { ...value, id: key };
        });
        return this.noteList;
    }

    async getUserNotes(uid) {
        const notesRef = query(ref(db, `notes`), orderByChild('author'), equalTo(uid));
        const value = await get(notesRef);

        if (value.val()) {
            this.noteList = Object.entries(value.val()).map(([key, value]) => {
                const dataItem = {
                    ...value,
                    id: key,
                };
                dataItem.parentId = value.parentId === undefined ? null : value.parentId;
                return dataItem;
            });
            return nest(this.noteList);
        }
        return [];
    }

    async getNote(id) {
        const noteRef = ref(db, `/notes/${id}`);
        const value = await get(noteRef);
        if (value.val()) {
            return { ...value.val(), id };
        }
        return null;
    }

    async create(note) {
        const newNoteKey = push(child(ref(db), 'notes')).key;
        await set(ref(db, 'notes/' + newNoteKey), {
            ...note,
        });
        return newNoteKey;
    }

    async updateTitle(data, id) {
        const updates = {};
        updates[`/notes/${id}/title`] = data.title;
        await update(ref(db), updates);
        return this.getNote(id);
    }

    async delete(note) {
        const deleteNotes = flattenNote(note);
        for (let note of deleteNotes) {
            await remove(ref(db, `/notes/${note.id}`));
            await BlockDataService.deleteNoteBlocks(note.id);
        }
        return this.getUserNotes(deleteNotes[0].author);
    }
}

export default new NoteDataService();
