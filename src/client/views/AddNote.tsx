import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../utilities/use-form';
import notesService from '../services/notes';

interface AddNoteProps {

}

export default function AddNote() {

    const { values, handleChanges } = useForm<{ body: string }>({ body: '' });
    const [noteData, setNoteData] = useState<{ id: string, message: string }>({ id: '', message: '' });

    const navigate = useNavigate();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        notesService.addNewNote(values)
            .then(({ id, message }) => {
                setTimeout(() => navigate(`/notes/${id}`), 3000);
                setNoteData({ id, message });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>AddNote View</h1>
            <div>
                <form>
                    <textarea
                        name='body'
                        value={values.body || ''}
                        onChange={handleChanges}
                        rows={10}
                    />
                    <button onClick={handleSubmit}>Add New Note!</button>
                </form>
            </div>
            <div>
                <p>{noteData.message ? `${noteData.message} with an id: ${noteData.id}` : ''}</p>
            </div>
        </div>
    )
}
