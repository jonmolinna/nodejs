import MongoClient from 'mongodb';

export const connect = async () => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = client.db('node-restapi');
        console.log('DB is Connected');
        return db;
    } catch(e) {
        console.log(e)
    }
}