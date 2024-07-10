import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
    console.log('Received request for test-connection')
    try {
        const client = await clientPromise
        console.log('Connected to MongoDB')
        const db = client.db('Cluster0')
        console.log('Selected database')
        const collections = await db.listCollections().toArray()
        console.log('Fetched collections')
        res.status(200).json({ collections })
    } catch (e) {
        console.error('Error connecting to database:', e)
        res.status(500).json({ error: 'Failed to connect to database' })
    }
}