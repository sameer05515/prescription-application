import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

function Show() {
    const location = useLocation();
    let { id } = useParams();
    const presItemList = useSelector(state => state.pres.items);
    const [selectedPres, setSelectedPres] = useState(null);
    useEffect(() => {
        const item = presItemList.find(p => { return p.id === id });
        setSelectedPres(item);
        console.log(item)
    }, [id]);
    return (
        <div className="card">
            {selectedPres &&  <div className="card-body">
                <h5 className="card-title">{selectedPres.prescriptionTitle}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                    {selectedPres.personName} ( <u>{selectedPres.personEmail}</u> )
                </h6>
                <p className="card-text">
                    {selectedPres.prescriptionDescription}
                </p>
                <a href="#" className="card-link">Some related Prescription link</a>
                <a href="#" className="card-link">Another related Prescription link</a>
            </div>
            }
        </div>
    )
}

export default Show