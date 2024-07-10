import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let client
let clientPromise

if (!uri) {
    throw new Error('Add your Mongo URI to .env.local')
}

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
        
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise