'use strict';

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'dungeoneer';

const User = require('./classes/user');

const user = new User();
console.log(user);

// MongoClient.connect(url, (err, client) => {
//     if (err) throw err;

//     console.log("Connected successfully to server");
//     const db = client.db(dbName);

//     insertDocuments(db, (res) => {
//         console.log('inserted?');
//         console.log(res);
//     });

//     client.close();
// });

// const insertDocuments = (db, callback) => {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Insert some documents
//     collection.insertMany([
//         { a: 1 }, { a: 2 }, { a: 3 }
//     ], (err, result) => {
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }