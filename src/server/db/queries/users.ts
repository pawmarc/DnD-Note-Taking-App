import { Query } from "../pool";

export interface UsersTable {
    id?: string;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    created_at?: string;
}

const find = (col: string, val: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?;', [col, val]);

const insert = (values: UsersTable) => Query('INSERT INTO users SET ?;', values);    // other way - inserting whole object
    // Query('INSERT INTO users(id, email, password, first_name, last_name) VALUE(?, ?, ?, ?, ?);', values); // one syntax of SQL Query

export default {
    find,
    insert
}