import { Database } from '../../lib/mongodb'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body

        try {
            const { db } = await Database()

            /* Checking for user existence */
            const userExists = await db.collection('users').findOne({ email })
            if (userExists) {
                return res.status(400).json({ error: 'User already exists' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            /* Create new user */
            const newUser = await db.collection('users').insertOne({
                name,
                email,
                password: hashedPassword,
                role: 'reader'
            })

            /* Session Cookie */
            const cookieOptions = {
                httpOnly: true, /* Only Server cookie */
                maxAge: 30 * 24 * 60 * 60, /* 30 days */
                path: '/' /* Visible in all pages */
            }

            res.setHeader('Set-Cookie', serialize('sessionID', newUser.insertedId.toString(), cookieOptions))
            res.status(200).json({ message: 'User registration successful', user: newUser })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}