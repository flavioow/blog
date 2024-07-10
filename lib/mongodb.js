import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let client
let clientPromise

if (!process.env.MONGODB_URI) {
    throw new Error('Add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 10000, socketTimeoutMS: 45000 })
        global._mongoClientPromise = client.connect()
    }
    
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 10000, socketTimeoutMS: 45000 })
    clientPromise = client.connect()
}

export default clientPromise