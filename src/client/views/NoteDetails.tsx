import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

import notesService from '../services/notes';
import services from '../services/notes';

interface NoteDetailsProps {
    [key: string]: string
}

const NoteDetails = (props: NoteDetailsProps) => {
    const [details, setDetails] = useState<{ [key: string]: string }>(null);
    const { id } = useParams();
    const [date, setDate] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        notesService.getOneNote(id)
            .then(note => {
                setDetails(note[0]);
                setDate(new Date(note[0].created_at));
            })
            .catch(err => console.log(err))
    }, [id]);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        services
            .deleteNote(id)
            .then(() => navigate('/notes'))
            .catch(err => console.log(err))
    }

    // console.log(createdDate);

    return (
        <div>
            <h1>Note Details View</h1>
            <div>
                <h2>Author: {details?.first_name}</h2>
                <div>
                    {details?.body.split('\n').map((para, idx) => (
                        <p key={`para-${idx}`}>{para}</p>
                    ))}
                    {/* {typeof details?.body === "string" ? <p>{details?.body}</p> : ''} */}
                </div>
                <p> {date ? `Date: ${format(date, 'dd/MM/yyyy')}` : ''}</p>
                <button onClick={handleDelete}>Delete Note</button>
                <Link to={`/notes/${id}/update`} state={details?.body}><button>Edit Note</button></Link>
                <Link to='/notes'><button>Go back</button></Link>
            </div>
        </div>
    )
}

export default NoteDetails;