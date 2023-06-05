import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import * as URLs from '../shared/URLs';
import PrettyPrintJson from '../shared/PrettyPrintJson';

function PersonList() {
    const presItemList = useSelector(state => state.person.items);
    const navigate = useNavigate();
    const showNewPersonForm = () => {
        navigate(URLs.SHOW_NEW_PERSON_FORM);
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-sm-4'>
                    <button onClick={showNewPersonForm}>Add Person</button>
                    <PrettyPrintJson data={presItemList} />

                    <ul className="list-group">

                        {
                            presItemList.map((pres, index) => (
                                <li className="list-group-item"
                                    aria-current="true"
                                    key={index}>
                                    <p onClick={() => navigate(`${URLs.VIEW_PRESCRIPTION}/${pres.id}`)}>
                                        {pres.name} ({pres.email})
                                    </p>

                                </li>
                            ))
                        }

                    </ul>

                </div>

                <div className='col-sm-8'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default PersonList