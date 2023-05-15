import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

import notesService from '../services/notes';
import services from '../services/notes';
import { Container } from "../components";

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
        <Container className='p-8'>
            <h1>Note Details View</h1>
            <article>
                <h2>Author: {details?.first_name} {details?.last_name}</h2>
                <div>
                    {details?.body.split('\n').map((para, idx) => (
                        <p key={`para-${idx}`}>{para}</p>
                    ))}
                    {/* {typeof details?.body === "string" ? <p>{details?.body}</p> : ''} */}
                </div>
                <p> {date ? `Date: ${format(date, 'dd/MM/yyyy')}` : ''}</p>
                <button className='btn btn-secondary' onClick={handleDelete}>Delete Note</button>
                <Link to={`/notes/${id}/update`} state={details?.body}><button className='btn btn-primary'>Edit Note</button></Link>
                <Link to='/notes'><button className='btn btn-primary'>Go back</button></Link>
            </article>
        </Container>
    )
}

{/* <article className='p-4 my-4 prose shadow-xl text-stone-100 bg-slate-700 lg:prose-xl ring-1 ring-gray-900/5' key={`note-id-${note.id}`}>
    <p>{`${note.body.slice(0, 60)}...`}</p>
    <Link to={`/notes/${note.id}`}><button className="text-teal-300 hover:text-teal-100">View full details</button></Link>
    <p className="text-right text-md text-stone-100"><span className='text-sm italic text-gray-300'>author:</span> {note.owners_name}</p>
</article> */}


export default NoteDetails;