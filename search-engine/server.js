//npm installed modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//my google api module
const googleApi = require('./googleApi');
//port and express init
const app = express();
const port = 5000;

//init of npm modules
app.use(bodyParser.json());
app.use(cors());

//GET routes
app.use(express.static(__dirname + '/build'))


//POST routes
app.post('/query', async (req,res)=>{
    const queryText = await req.body.queryText;
    const googleSearchJSON = await googleApi.search(queryText);
    res.send(JSON.parse(JSON.stringify(googleSearchJSON)));
})



//server listening point
app.listen(port, ()=>console.log(`listening on port ${port}`));
