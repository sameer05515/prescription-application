import React from 'react'

function Edit() {
  return (
    <form>
            <div className="form-group">
                <label for="prescriptionTitle">Prescription Title: </label>
                <input type="text" name="prescriptionTitle" className="form-control" value="My-Weakness-Removal-Tracker" required/>
            </div>
            <div className="form-group">
                <label for="personName" personEmail>Person name: </label>
                <input type="text" name="personName" className="form-control" value="Premendra Kumar" required/>
            </div>
            <div className="form-group">
                <label for="personEmail">Person Email: </label>
                <input type="email" name="personEmail" className="form-control" value="premendra.bce05515@gmail.com" required/>
            </div>
            <div className="form-group">
                <label for="prescriptionDescription">Prescription Description: </label>
                <textarea name="prescriptionDescription" rows="10" cols="400" className="form-control" required>
                This tracker is for tracking my weakness, identifying its root-cause and its remedy. Also there should be one page where I can daily track my progress.
                </textarea>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  )
}

export default Edit