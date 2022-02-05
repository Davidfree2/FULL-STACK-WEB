//postgres module
const { Pool } = require('pg');

//your user authenticaion
const pool = new Pool({
    user: 'david',
    host: '127.0.0.1',
    database: 'carphotos',
    password: 'Davidfree22D',
    port: '5432',
})

//end connection do database
const endConnection = () => pool.end();

//select * from urls
const selectAllQuery = async(myQuery)=>{
    const querying = await pool.query(myQuery);
    return querying;
}

//this module exports
exports.selectAllQuery = selectAllQuery;
exports.endConnection = endConnection;
