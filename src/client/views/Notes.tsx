import React, { useEffect, useState } from "react";
import { useAuth } from "../utilities/use-auth";
import notesService from '../services/notes';
import { Link } from "react-router-dom";

interface NotesProps {

}

const Notes = (props: NotesProps) => {
    const { authenticated } = useAuth();

    const [notes, setNotes] = useState<{ [key: string]: string }[]>([]);

    useEffect(() => {
        notesService.getAllNotes()
            .then(res => setNotes(res))
            .catch(err => console.log(err.message));
    }, [])

    return (
        <div>
            <h1>Notes View</h1>

            <div>
                {notes.map(note => (
                    <div key={`note-id-${note.id}`}>
                        <h2>{note.owners_name}</h2>
                        <Link to={`/notes/${note.id}`}><button>View full details</button></Link>
                        <p>{`${note.body.slice(0, 20)}...`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes;