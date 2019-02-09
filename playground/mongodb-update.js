// connect to a server
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5c5e49c3e88a8703b43121e0') },
        { $set: { age: 41 } },
        { returnOriginal: true } // true to show old or false to show new
    ).then((result) => {
        console.log(result)
    })

    client.close();
});