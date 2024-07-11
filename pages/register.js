import { useState } from 'react'
import { redirectPrevious } from '../app/utils/redirect'
import Cookies from 'js-cookie'
import Link from 'next/link'
import Button from '../app/components/button/'
import '../app/styles/login.css'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })

        const data = await response.json()

        if (response.ok) {
            const sessionID = Cookies.get('sessionID')
            console.log('Session ID:', sessionID)
            redirectPrevious(['login', 'register'])
        } else {
            setError(data.error)
        }
    }

    return (
        <div className='formContainer grid-layout'>
            <div className='formArea grid breakout'>
                <div className='formBanner'></div>
                <div className='formContent'>
                    <h2>Create Account</h2>
                    <p>We appreciate your patience!</p>
                    <form className='grid align-center' name='loginForm' onSubmit={handleSubmit}>
                        <div className='flex justify-between align-center'>
                            <label htmlFor='name'>Your name</label>
                            <input className='formEmail' id='name' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='flex justify-between align-center'>
                            <label htmlFor='email'>Your e-mail address</label>
                            <input className='formEmail' id='email' type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex justify-between align-center'>
                            <label htmlFor='password'>Your password</label>
                            <input className='formPassord' id='password' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button
                            className='formSubmit'
                            label='Create Account'
                            type='Primary'
                            action='submit'
                            param={{ form: 'form[name="loginForm"]' }}
                        />
                        <aside>
                            <p>Already have an account? <Link className='asideLink' href='./login'>Keep it up!</Link></p>
                            {error && <p>{error}</p>}
                        </aside>
                    </form>
                </div>
            </div>
        </div>
    )
}