import React from 'react'
import Link from 'next/link'
import './logo.css'

const Logo = (props) => {
    const href = props.href || '/'

    return (
        <div className='logoContainer'>
            <Link href={href}>
                <svg className='Logo' width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="mask">
                            <rect x="-600" y="0" width="400" height="600" fill="white" className="mask-rect" />
                        </mask>
                    </defs>
                    <path className='logoPath' d="M100 0L0 150V600H300L400 450V300H300L400 150V0H100Z" fill="currentColor" />
                    <path className='logoPathOverlay' d="M100 0L0 150V600H300L400 450V300H300L400 150V0H100Z" fill="var(--theme-primary)" mask="url(#mask)" />
                </svg>
            </Link>
        </div>
    )
}

export default Logo