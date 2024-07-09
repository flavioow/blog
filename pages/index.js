import React from 'react'

/* Components */
import Header from '../app/layouts/header/'
import Button from '../app/components/button/'


function Index() {
    return (
        <div id='root'>
            <Header />
            <Button label='Example' type='Primary' className='disable' /> <br/>
            <Button label='Example' type='Secondary' className='disable' /> <br/>
            <Button label='Example' type='Accent' className='disable' /> <br/>
            <Button label='Example' type='Success' className='disable' /> <br/>
            <Button label='Example' type='Error' className='disable' /> <br/>
            <Button label='Example' type='Warning' className='disable' /> <br/>
            <Button label='Example' type='Basic' className='disable' /> <br/>
        </div>
    )
}

export default Index