// connect to a server
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // How to count all the documents in a collection
    db.collection('Users').find().count().then((count) => {
        console.log('Todos count:', count)
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })

    client.close();
});


// Do this to query by ID
//_id: new ObjectID('5c5dcf4cc2b633184c859d11')

//Do this to query by name
// name: 'LeRon Jackson'

    // db.collection('Users').find({
    //     _id: new ObjectID('5c5dcf4cc2b633184c859d11')
    // }).toArray().then((docs)=>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // },(err) =>{
    //     console.log('Unable to fetch todos', err)
    // })

// Look at documentation for Mongo for Cursor
// these are the different methods used for Find()