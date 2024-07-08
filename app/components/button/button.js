import React, { act } from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

let action = (props) => {
    switch (props.action) {
        case 'redirect':
            redirect()
            break
        case 'toogle':
            toogle()
            break
        case 'submit':
            submit()
            break
    }
}

let redirect = (props) => {
    if (props.param.url) {
        if (props.param.blank) {
            window.open(props.param.url, props.param.blank)
        }
        else {
            window.open(props.param.url)
        }
    }
    else {
        console.warn('<param.url> must be provided')
    }
}

let toogle = (props) => {
    let target = props.param.target
    let value = props.param.value || 'disable'
    target.classList.toogle(`${value}`)
}

let submit = (props) => {
    
}

const Button = (props) => {
    return (
        <button
            className = {`Button button-${props.type} ${props.className}`}
            action = {props.action}
            param = {props.param}
        >
            <div className='buttonIcon'>{props.icon}</div>
            <div className='buttonLabel'>{props.label}</div>
        </button>
    )
}

export default Button

/*
    { label, icon, type, action, param = { origin, destination, conditional, handler }, className }
    1. label
    2. icon
    3. type
    5. action
    6. param: origin, destination, conditional, handler
*/