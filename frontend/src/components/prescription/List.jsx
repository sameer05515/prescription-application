import React from 'react'
import { useSelector } from 'react-redux'

function List() {
    const presItemList = useSelector(state => state.pres.items);
    return (
        <div className="col-sm-4">
            <ul className="list-group">

                {
                    presItemList.map((pres, index) => (
                        <li className="list-group-item" 
                        aria-current="true"
                        key={index}>
                            My-Weakness-Removal-Tracker
                            {/* <br /> Index {index} */}
                        </li>
                    ))
                }

            </ul>
        </div>


    )
}

export default List