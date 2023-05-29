import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import * as URLs from '../shared/URLs';

function List() {
    const presItemList = useSelector(state => state.pres.items);
    const navigate = useNavigate();
    return (
        <div className="col-sm-4">
            <ul className="list-group">

                {
                    presItemList.map((pres, index) => (
                        <li className="list-group-item" 
                        aria-current="true"
                        key={index}>
                            <p onClick={()=>navigate(`${URLs.VIEW_PRESCRIPTION}/${pres.id}`)}>
                            {pres.prescriptionTitle}
                            </p>
                            
                        </li>
                    ))
                }

            </ul>

            {JSON.stringify(presItemList)}
        </div>


    )
}

export default List