import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const action = (props) => {
    switch (props.action) {
        case 'redirect':
            redirect(props.param)
            break
        case 'toggle':
            toggle(props.param)
            break
        case 'submit':
            submit(props.param)
            break
        case 'refresh':
            refresh(props.param)
            break
        default:
            console.warn('Action not recognized')
    }
}

const redirect = (param) => {
    if (param.url) {
        if (param.blank) {
            window.open(param.url, param.blank)
        }
        else {
            window.open(param.url)
        }
    }
    else {
        console.warn('<param.url> must be provided')
    }
}

const toggle = (param) => {
    let target = document.querySelector(param.target)
    let value = param.value || 'disable'
    if (target) {
        target.classList.toggle(value)
    } else {
        console.warn('<param.target> must be provided and exist in DOM')
    }
}

const submit = (param) => {
    let target = param.target
    fetch(target, {
        method: param.method || 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(param.data || param.content)
    })
}

const refresh = (param) => {
    let target = param.target || 'window'
    if (!target || target === 'window') {
        window.location.reload()
    }
    else {
        let refreshElement = document.querySelector(target)
        if (refreshElement) {
            let children = [...refreshElement.childNodes]
            refreshElement.replaceChildren(...children)
        }
        else {
            console.warn('<param.target> must be provided and exist in DOM')
        }
    }
}

const Button = (props) => {
    const handleClick = () => {
        action(props)
    }

    return (
        <button
            className={`Button button${props.type} ${props.className}`}
            onClick={handleClick}
        >
            {props.icon && <div className='buttonIcon'>{props.icon}</div>}
            {props.label && <div className='buttonLabel'>{props.label}</div>}
        </button>
    )
}

Button.propTypes = {
    action: PropTypes.string.isRequired,
    param: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['Primary', 'Secondary', 'Success', 'Error','Warning']),
    className: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.string
}

Button.defaultProps = {
    type: 'Secondary',
    className: ''
}

export default Button