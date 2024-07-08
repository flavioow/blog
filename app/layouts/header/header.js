import React from 'react'
import Button from '~/components/button/'
import './header.css'
import Logo from '~/layouts/logo/'

const Header = () => {
    return (
        <header className='Header grid-layout'>
            <div class="headerContent breakout flex justify-between">
                <Logo />
                <div class="headerLinks">
                    <ul>
                        <li><Button label='Example' className='active' /></li>
                        <li><Button label='Example' type='Primary' /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header