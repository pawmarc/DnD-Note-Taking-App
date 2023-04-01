import { Query } from "../pool";

interface UsersTable {
    id?: string;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    created_at?: string;
}

const find = (col: string, val: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?;', [col, val]);


export default {
    find
}