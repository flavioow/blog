import React from 'react'

/* Components */
import Header from '../app/layouts/header/'
import Latest from '../app/layouts/latest/'
import Post from '../app/layouts/post/'
import Button from '../app/components/button/'


function Index() {
    return (
        <div id='root'>
            <Header />
            <div className='content grid-layout'>
                <Latest/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Index