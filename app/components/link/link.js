import React from 'react'
import './link.css'

const Link = (props) => {
	return <a className='Link clickable' href={props.href}>{props.children}</a>
}

export default Link