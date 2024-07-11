import React from 'react'
import Button from '~/components/button/'
import Link from '~/components/link/'
import './header.css'
import Logo from '../../components/logo/'

const Header = () => {
    return (
        <header className='Header grid-layout align-center'>
            <div class="headerContent breakout flex justify-between align-center">
                <Logo />
                <div class="headerLinks">
                    <ul>
                        <li><Link href='./login'>Login</Link></li>
                        <li><Button label='Get Started' type='Basic' action='redirect' param={{url: './register'}} /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header