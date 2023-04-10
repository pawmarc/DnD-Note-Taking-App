import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notesService from '../services/notes';
import { format } from 'date-fns';
import { Link } from "react-router-dom";

interface NoteDetailsProps {
    [key: string]: string
}

const NoteDetails = (props: NoteDetailsProps) => {

    const [details, setDetails] = useState<{ [key: string]: string }>(null);
    const { id } = useParams();

    const [date, setDate] = useState(null);

    useEffect(() => {
        notesService.getOneNote(id)
            .then(note => {
                setDetails(note[0])
                setDate(new Date(note[0].created_at));
            })
            .catch(err => console.log(err))
    }, [id]);

    // console.log(createdDate);

    return (
        <div>
            <h1>Note Details View</h1>
            <div>
                <h2>Author: {details?.first_name}</h2>
                <p>{details?.body}</p>
                <p> {date ? `Date: ${format(date, 'dd/MM/yyyy')}` : ''}</p>
                <Link to='/notes'>Go back</Link>
            </div>
        </div>
    )
}

export default NoteDetails;