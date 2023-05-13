import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { prescActions } from '../../store/prescription-slice';

function Add() {

  const dispatch = useDispatch();

  const [prescription, setPrescription] = useState({
    prescriptionTitle: "",
    personName: "",
    personEmail: "",
    prescriptionDescription:""
  });

  const handleChange = (event) => {
    setPrescription({ ...prescription, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(prescActions.addItem(prescription))
    //addContact(contactInfo);
    //setContactInfo({ name: "", email: "", phonenumber: "",details:"",stage:"" });
  };

  return (
    <form>
            <div className="form-group">
                <label htmlFor="prescriptionTitle">Prescription Title: </label>
                <input type="text" 
                name="prescriptionTitle" 
                className="form-control" 
                value={"My-Weakness-Removal-Tracker"}
                onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="personName">Person name: </label>
                <input type="text"
                 name="personName" 
                 className="form-control" 
                 value={"Premendra Kumar"}
                 onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="personEmail">Person Email: </label>
                <input type="email" 
                name="personEmail" 
                className="form-control" 
                value={"premendra.bce05515@gmail.com"}
                onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="prescriptionDescription">Prescription Description: </label>
                <textarea name="prescriptionDescription" 
                rows="10" cols="400" 
                className="form-control"
                value={prescription.prescriptionDescription}
                onChange={handleChange} required>
                </textarea>
            </div>


            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
  )
}

export default Add