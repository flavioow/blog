import clientPromise from '../lib/mongo'
import { ObjectId } from 'mongodb'

const User = {
    async findById(id) {
        const client = await clientPromise
        return await client.db('blog').collection('users').findOne({ _id: ObjectId(id) })
    },

    async findByEmail(email) {
        const client = await clientPromise
        return await client.db('blog').collection('users').findOne({ email })
    },

    async createUser(data) {
        const client = await clientPromise
        const result = await client.db('blog').collection('users').insertOne(data)
        return result.ops[0]
    },
}

export default User