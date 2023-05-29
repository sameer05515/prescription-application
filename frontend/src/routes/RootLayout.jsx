import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import List from '../components/prescription/List';
import * as URLs from '../components/shared/URLs';

function RootLayout() {

    const navigate = useNavigate();

    const showNewForm = () => {
        navigate(URLs.NEW_PRESCRIPTION);
    }

    return (

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

    )
}

export default RootLayout