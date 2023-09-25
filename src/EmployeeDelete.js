import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmployeeDelete() {
  const { id } = useParams();
 
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch the country data to confirm deletion
    axios.get(`https://localhost:7082/api/Employee/${id}`)
      .then((response) => {
        console.log(response.data)
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error('Error fetching country:', error);
      });
  }, [id]);

  const handleDelete = () => {
    // Send a DELETE request to remove the country
    axios.delete(`https://localhost:7082/api/Employee/${id}`)
      .then(() => {
        // Redirect to the list of countries or perform other actions
        return(
            <a href='/'>Back</a>
        )
      })
      .catch((error) => {
        console.error('Error deleting country:', error);
      });
  };

  const handleCancel = () => {
    return(
        <a href='/'>Back</a>
    )
    
  };

  return (
    <div>
      <h2>Delete Country</h2>
      {employee && (
        <div>
          <p>Are you sure you want to delete the Employee "{employee.firstName} {employee.lastName}"?</p>
          <a href='/' className="btn btn-danger" onClick={handleDelete}>Delete</a>{""}
          <a href='/' className='btn btn-primary' onClick={handleCancel}>Cancel</a>
        </div>
      )}
    </div>
  );
}

export default EmployeeDelete;
