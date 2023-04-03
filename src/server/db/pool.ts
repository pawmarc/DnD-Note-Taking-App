import config from '../config';

import mysql from 'mysql';

const pool = mysql.createPool(config.db);

export const Query = <T = mysql.OkPacket>(sql: string, values?: any) => {
    const formatted = mysql.format(sql, values);

    return new Promise<T>((resolve, reject) => {
        pool.query(formatted, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}
// NEW way of querying
// Query('SELECT 1 + 6 as sum;')
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message))

// OLD way of querying
// pool.query('SELECT 1 + 1 as sum;', (err, result) => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log(result);
// });