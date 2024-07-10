import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
    try {
        const client = await clientPromise
        const db = client.db('Cluster0')
        const collections = await db.listCollections().toArray()
        const collectionNames = collections.map(collection => collection.name)
        res.status(200).json({ collections: collectionNames })
    } catch (e) {
        res.status(500).json({ error: 'Failed to connect to database' })
    }
}