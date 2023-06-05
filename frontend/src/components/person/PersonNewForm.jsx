import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as URLs from '../shared/URLs';
import { personActions } from '../../store/person-slice';

function PersonNewForm() {

    const dispatch = useDispatch();

  const navigate = useNavigate();

    const [prescription, setPrescription] = useState({
        name: "",
        email: ""
      });

      const handleChange = (event) => {
        setPrescription({ ...prescription, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(personActions.addItem(prescription));
        navigate(URLs.SHOW_PERSON_LIST);
        //addContact(contactInfo);
        //setContactInfo({ name: "", email: "", phonenumber: "",details:"",stage:"" });
      };

  return (
    <>
    <form>
    <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" 
                name="name" 
                className="form-control" 
                value={prescription.name}
                onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text"
                 name="email" 
                 className="form-control" 
                 value={prescription.email}
                 onChange={handleChange} required/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default PersonNewForm