import React, { useState, useEffect } from 'react'

/* Components */
import Header from '../app/layouts/header/'

/* Hooks */
import useTitle from '../app/hooks/head/useTitle'
import useFavicon from '../app/hooks/head/useFavicon'

function Root() {
    /* Use Hooks */
    const [appName, setAppName] = useState('Site')

    useTitle(appName)
    useFavicon('%PUBLIC_URL%/./favicon.svg')

    useEffect(() => {
        fetch('/manifest.json')
            .then(response => response.json())
            .then(data => setAppName(data.short_name || 'My Portfolio'))
            .catch(error => console.error('Error fetching manifest:', error))
    }, [])

    return (
        <div id='root'>
            <Header />
        </div>
    )
}

export default Root