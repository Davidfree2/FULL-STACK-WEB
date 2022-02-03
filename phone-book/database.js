const { MongoClient } = require('mongodb');
const yourUrl = "mongodb://192.168.254.17:27017";

const queryObject = {example: 'this came from mongodb Thing'};

const mongoInsertOne = async (person, obj)=>{
    const mongo = await MongoClient.connect(yourUrl);
    const db = await mongo.db('addressBook');
    const dbCollect = await db.collection(person).insertOne(obj);
    console.log('success query added');
    mongo.close();
}

const mongoFindAllContacts = async (person)=>{
    const mongo = await MongoClient.connect(yourUrl);
    const db = await mongo.db('addressBook');
    const dbFind = await db.collection(person).find({name: {$exists: true}});
    const results = await dbFind.toArray();
    return results
    mongo.close();
}

const mongoFindUserPassword = async (person)=>{
    try{
    const mongo = await MongoClient.connect(yourUrl);
    const db = await mongo.db('addressBook');
    const dbFind = await db.collection(person).find({password: {$exists: true}});
    const resultsToArray = await dbFind.toArray();
    const results = await resultsToArray[0].password;
    //console.log(results);
    return await results;
    mongo.close();
    } catch {
        return 'ERROR'
    }
}

const mongoDeleteOne = async (person, personName)=>{
    const mongo = await MongoClient.connect(yourUrl);
    const db = await mongo.db('addressBook');
    const dbFind = await db.collection(person).deleteOne({name: personName});
    console.log('success query removed');
    mongo.close();
}

const mongoCreateCollection = async (person)=>{
    const mongo = await MongoClient.connect(yourUrl);
    const db = await mongo.db('addressBook');
    const dbFind = await db.createCollection(person);
    console.log('collection created');
    mongo.close();
}


exports.mongoFindAllContacts = mongoFindAllContacts;
exports.mongoFindUserPassword = mongoFindUserPassword;
exports.mongoDeleteOne = mongoDeleteOne;
exports.mongoInsertOne = mongoInsertOne;
exports.mongoCreateCollection = mongoCreateCollection;
