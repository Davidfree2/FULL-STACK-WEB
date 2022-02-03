//npm installed modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//custom built modules
const mongo = require('./database.js');

//port and express init
const app = express();
const port = 8080;

//init of npm modules
app.use(cors());
app.use(bodyParser.json());

//cookie parser init
app.use(cookieParser());

//GET methods
app.use(express.static(__dirname + '/build'))

app.get('*', (req,res)=> res.sendFile(__dirname + '/build/index.html'));


app.get('/example', (req,res)=>res.json({
    name: 'david',
    phone: 'something',
    something: 'two'
}))

//POST routes
app.post('/signInLogIn', async(req,res)=>{
    const userName = await req.body.userName;
    const passWord = await req.body.passWord;
    console.log(userName);
    console.log(passWord);
})

app.post('/findUserPassword', async(req,res)=>{
    const user = await req.body.clientUsername;
    const userAction = await mongo.mongoFindUserPassword(user);
    const userPassword = await userAction;
    res.send(userPassword);
})

app.post('/createUser', async(req,res)=>{
    const user = await req.body.newUsername;
    const clientPassword = await req.body.newPassword;
    const passwordObj = {password: clientPassword};
    const createUser = await mongo.mongoInsertOne(user, passwordObj);
    res.send('success');
})

app.post('/addContactInfo', async(req,res)=>{
    const username = req.body.username;
    const dbname = await req.body.name;
    const dbstreet = await req.body.street;
    const dbcity = await req.body.city;
    const dbemail = await req.body.email;
    const obj = await {
        name: dbname,
        street: dbstreet,
        city: dbcity,
        email: dbemail
    }
    mongo.mongoInsertOne(username, obj);
    console.log(username);
    console.log(obj);
    res.send('success');
})

app.post('/getContactInfo', async(req,res)=>{
    try{
        const username = await req.body.username;
        const data = await mongo.mongoFindAllContacts(username);
        res.send(JSON.parse(JSON.stringify(data)));
    } catch {
        console.log('failed to get contact info');
    }
})

//server listening point
app.listen(port, ()=> console.log(`listening in port ${port}`));

