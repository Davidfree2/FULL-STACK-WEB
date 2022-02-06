//postgres module
const { Pool } = require('pg');

//your user authenticaion
const pool = new Pool({
    user: 'user',
    host: 'host',
    database: 'database_name',
    password: 'your_password',
    port: 'your_port',
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
