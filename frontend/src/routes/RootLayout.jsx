import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../components/prescription/List'
import Navbar from '../components/header/Navbar'

function RootLayout() {

    const showNewForm = () => {

    }

    return (
        <div className="container">
            <Navbar />
            <div className="container">
                <div className='row'>
                    <div className='col-sm-4'>
                        <button onClick={showNewForm}>Create New</button>
                    </div>
                </div>
                <div className="row">
                    <List />
                    <div className='col-sm-8'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RootLayout