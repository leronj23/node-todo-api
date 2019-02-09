// connect to a server
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //deleteMany
    db.collection('Users').deleteMany({ 
        name: 'LeRon Jackson'
    }).then((result) => {
        console.log(result)
    });

    //deleteOne
    // db.collection('Users').deleteOne({
    //     name: 'LeRon Jackson'
    // }).then((result)=>{
    //     console.log(result)
    // })

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({
    //     name: 'LeRon Jackson'
    // }).then((result)=>{
    //     console.log(result)
    // })

    //client.close();
});