import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let client
let clientPromise

if (!uri) {
    throw new Error('MongoDB URI missing!')
}

if (!process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    clientPromise = client.connect()
}

export default clientPromise