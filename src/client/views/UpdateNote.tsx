import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../utilities/use-form';
import notesService from '../services/notes';

interface UpdateNoteProps {

}

export default function UpdateNote() {
    const { id } = useParams();
    const { state } = useLocation();

    const { values, handleChanges, setValues } = useForm<{ body: string }>({ body: state } || { body: '' });
    const [noteData, setNoteData] = useState<{ id: string, message: string }>({ id: '', message: '' });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        notesService.updateNote(`${id}`, values)
            .then(({ id, message }) => {
                setTimeout(() => navigate(`/notes/${id}`), 3000);
                setNoteData({ id, message });
            })
            .catch(err => {
                setError(`You can only edit your own notes.`);
                console.log(err)
            });
    }

    useEffect(() => {
        if (state) {
            return;
        }

        notesService
            .getOneNote(id)
            .then(data => {
                console.log(data[0]);
                const { body } = data[0];
                setValues({ body })
            })
            .catch(err => console.log(err));

    }, [id])

    return (
        <div>
            <h1>UpdateNote View</h1>
            <div>
                <form>
                    <textarea
                        name='body'
                        value={values.body || ''}
                        onChange={handleChanges}
                        rows={10}
                    />
                    <button onClick={handleSubmit}>Update Note!</button>
                </form>
            </div>
            <div>
                <p>{noteData.message ? `${noteData.message} with an id: ${noteData.id}` : ''}</p>
                <p>{error ? `${error}` : ''}</p>
            </div>
        </div>
    )
}
