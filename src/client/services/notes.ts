import { _delete, get, post, put } from './base';


const getAllNotes = async () => {
    try {
        const notes = await get('/api/notes');
        return notes;
    } catch (error) {
        throw error;
    }
}

const getOneNote = async (noteId) => {
    try {
        const note = await get(`/api/notes/${noteId}`);
        return note;
    } catch (error) {
        throw error;
    }
}

const addNewNote = async (payload: { [key: string]: string }) => {
    try {
        const { id, message } = await post('/api/notes', payload);
        return { id, message };
    } catch (error) {
        throw error;
    }
}

const deleteNote = async (noteid: string) => {
    try {
        const { id, message } = await _delete(`/api/notes/${noteid}`);
        return { id, message };
    } catch (error) {
        throw error;
    }
}

const updateNote = async (noteid: string, payload: { [key: string]: string }) => {
    try {
        const { id, message } = await put(`/api/notes/${noteid}`, payload);
        return { id, message }
    } catch (error) {
        throw error
    }
}

export default {
    getAllNotes,
    getOneNote,
    addNewNote,
    deleteNote,
    updateNote
}