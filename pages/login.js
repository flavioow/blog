import { useState } from 'react'
import { redirectPrevious } from '../app/utils/redirect'
import Cookies from 'js-cookie'
import Link from 'next/link'
import Button from '../app/components/button/'
import '../app/styles/login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            const data = await response.json()
            const sessionID = Cookies.get('sessionID')

            console.log('Session ID:', sessionID)
            redirectPrevious(['login', 'register'])
        } else {
            console.error('Login failed')
        }
    }

    return (
        <div className='formContainer grid-layout'>
            <div className='formArea grid breakout'>
                <div className='formBanner'></div>
                <div className='formContent'>
                    <h2>Welcome Back</h2>
                    <p>It's great to see you again!</p>
                    <form className='grid align-center' name='loginForm' onSubmit={handleSubmit}>
                        <div className='flex justify-between align-center'>
                            <label for='email'>Your e-mail address</label>
                            <input className='formEmail' id='email' type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex justify-between align-center'>
                            <label for='password'>Your password</label>
                            <input className='formPassord' id='password' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button
                            className='formSubmit'
                            label='Continue'
                            type='Primary'
                            action='submit'
                            param={{ form: 'form[name="loginForm"]' }}
                        />
                        <aside>
                            <p>Don't have an account yet? <Link className='asideLink' href='./register'>Create one now!</Link></p>
                        </aside>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login