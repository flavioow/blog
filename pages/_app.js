import React, { useState, useEffect } from 'react'

/* Styles */
import '../app/root.css'
import '../app/global.css'
import '../app/utility.css'

/* Hooks */
import useTitle from '../app/hooks/head/useTitle'
import useFavicon from '../app/hooks/head/useFavicon'

function App({ Component, pageProps }) {
    /* Use Hooks */
    const [appName, setAppName] = useState('Site')

    useTitle(appName)
    useFavicon('./favicon.svg')

    useEffect(() => {
        fetch('./manifest.json')
            .then(response => response.json())
            .then(data => setAppName(data.short_name || 'My Portfolio'))
            .catch(error => console.error('Error fetching manifest:', error))
    }, [])

    return <Component {...pageProps} />
}

export default App