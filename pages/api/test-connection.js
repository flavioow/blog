import clientPromise from '../../lib/mongodb'
import middleware from '../../lib/middleware'

export default async (req, res) => {
    await middleware(req, res, async () => {
        console.log('Received request for test-connection')
        try {
            const client = await clientPromise
            console.log('Connected to MongoDB')
            const db = client.db('Cluster0')
            const collections = await db.listCollections().toArray()
            console.log('Collections fetched')
            const collectionNames = collections.map(collection => collection.name)
            res.status(200).json({ collections: collectionNames })
        } catch (e) {
            console.error('Error connecting to database:', e)
            res.status(500).json({ error: 'Failed to connect to database' })
        }
    })
}