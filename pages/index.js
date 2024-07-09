import React from 'react'

/* Components */
import Header from '../app/layouts/header/'
import Button from '../app/components/button/'


function Index() {
    return (
        <div id='root'>
            <Header />
            <Button label='Example' type='Primary' /> <br/>
            <Button label='Example' type='Secondary' /> <br/>
            <Button label='Example' type='Accent' /> <br/>
        </div>
    )
}

export default Index