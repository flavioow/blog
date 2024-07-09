import React from 'react'
import './logo.css'

const Logo = () => {
	return (
		<div className='logoContainer'>
			<a href="./">
				<svg className='Logo' width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className='logoPath' d="M100 0L0 150V600H300L400 450V300H300L400 150V0H100Z" fill="currentColor" />
				</svg>
			</a>
		</div>
	)
}

export default Logo