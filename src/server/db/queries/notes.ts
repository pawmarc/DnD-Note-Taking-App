import { Query } from "../pool";
import { v4 as uuid } from 'uuid';
import type { UsersTable } from "./users";

export interface NotesTable {
    id?: string;
    userid?: string;
    body?: string;
    created_at?: string;
}

const all = () => Query<(NotesTable & UsersTable)[]>(`
    SELECT
        users.first_name AS owners_name,
        notes.*
    FROM
        notes
    JOIN
        users
    ON
        notes.userid = users.id;
    `
);

const one = (id: string) => Query<(NotesTable & UsersTable)[]>(`

    SELECT
        users.first_name,
        notes.*
    FROM
        notes
    JOIN
        users
    ON
        notes.userid = users.id
    WHERE
        notes.id = ?
        ;

`, [id]);

const insert = (values: NotesTable) => {
    const id = uuid();
    return Query('INSERT INTO notes SET ?;', [values]);
};
const _delete = (id: string, userid: string) => {
    return Query('DELETE FROM notes WHERE id = ? AND userid = ?;', [id, userid]);
};

const update = (editedNote: NotesTable, id: string, userid: string) => Query("UPDATE notes SET ? WHERE id = ? AND userid = ?;", [editedNote, id, userid]);

export default {
    all,
    one,
    insert,
    _delete,
    update
}