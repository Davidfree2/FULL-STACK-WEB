//node modules
const express = require('express');
const cors = require('cors');

//express init
const app = express();
const port = 8080;

//cors init
app.use(cors());

//postgres my created modules and functions
const postgres = require('./database.js')

const postgresData = async()=>{
    const myQuery = 'select * from urls';
    const res = await postgres.selectAllQuery(myQuery);
    const rawData = await JSON.parse(JSON.stringify(res));
    const data = await rawData.rows;
    return data;
    postgres.endConnection()
}

//get requests

app.use(express.static(__dirname + '/public'));

app.get('/getData', async(req,res)=>{
    const data = await postgresData();
    res.json(data);
})

//server listening point
app.listen(port, ()=>console.log(`listening on port ${port}`));
