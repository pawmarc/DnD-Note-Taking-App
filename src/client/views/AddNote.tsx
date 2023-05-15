import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../utilities/use-form';
import notesService from '../services/notes';
import { Container } from '../components';

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
        <Container className="p-8">
            <h1 className='text-3xl prose text-teal-100'>AddNote View View</h1>
            <div>
                <form className='flex flex-wrap items-center justify-center flex-column'>
                    <div className="flex items-center justify-center w-full mb-2 max-w form-control">
                    <textarea
                        name='body'
                        value={values.body || ''}
                        onChange={handleChanges}
                        rows={10}
                            className='w-full p-2 md:w-1/2'
                    />
                    </div>

                    <div className="flex items-center justify-center w-full mb-2 max-w form-control">
                        <button className='p-2 btn btn-accent md:w-1/2' onClick={handleSubmit}>Add New Note!</button>
                    </div>

                </form>
            </div>
            <div>
                <p>{noteData.message ? `${noteData.message} with an id: ${noteData.id}` : ''}</p>
            </div>
        </Container>
    )
}
