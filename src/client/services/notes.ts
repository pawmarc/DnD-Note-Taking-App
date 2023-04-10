import { get, post } from './base';


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

export default {
    getAllNotes,
    getOneNote,
}