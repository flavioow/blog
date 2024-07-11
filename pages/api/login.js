import { Database } from '../../lib/mongodb'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body

        try {
            const { db } = await Database()

            /* Checking for user existence */
            const user = await db.collection('users').findOne({ email })
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }

            /* Password Match */
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Password incorrect' })
            }

            /* Session Cookie */
            const cookieOptions = {
                httpOnly: true, /* Only Server cookie */
                maxAge: 30 * 24 * 60 * 60, /* 30 days */
                path: '/' /* Visible in all pages */
            }

            res.setHeader('Set-Cookie', serialize('sessionID', user._id.toString(), cookieOptions))
            res.status(200).json({ message: 'Login successful', user })
        } catch (error) {
            console.error('Erro no servidor:', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}