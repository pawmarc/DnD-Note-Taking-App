import React, { useEffect, useState } from "react";
import { useAuth } from "../utilities/use-auth";
import notesService from '../services/notes';
import { Link } from "react-router-dom";
import { Container, PageHeader } from "../components";

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
        <Container className='p-8'>
            <PageHeader>Notes View</PageHeader>
            <h2>Notes | {authenticated ? "Logged in" : "Lot logged in"}</h2>
            <div>
                {notes.map(note => (
                    <article className='p-4 my-4 prose shadow-xl text-stone-100 bg-slate-700 lg:prose-xl ring-1 ring-gray-900/5' key={`note-id-${note.id}`}>
                        <p>{`${note.body.slice(0, 60)}...`}</p>
                        <Link to={`/notes/${note.id}`}><button className="text-teal-300 hover:text-teal-100">View full details</button></Link>
                        <p className="text-right text-md text-stone-100"><span className='text-sm italic text-gray-300'>author:</span> {note.owners_name}</p>
                    </article>
                ))}
            </div>
        </Container>
    )
}

export default Notes;