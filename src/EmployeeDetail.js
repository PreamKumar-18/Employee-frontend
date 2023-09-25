import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EmployeeDetail() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams(); // Get the country id from the URL

  useEffect(() => {
    // Fetch the details of the selected country using the id
    axios
      .get(`https://localhost:7082/api/Employee/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Employee details:", error);
      });
  }, [id]);

  if (!employee) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4">Employee Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">First Name:</h5>
          <p className="card-text">{employee.firstName}</p>

          <h5 className="card-title">Last Name:</h5>
          <p className="card-text">{employee.lastName}</p>

          <h5 className="card-title">Email:</h5>
          <p className="card-text">{employee.email}</p>
        </div>
      </div>

      <div className="mt-3">
        <Link to="/" className="btn btn-danger">
          Back
        </Link>
      </div>
    </div>
  );
}

export default EmployeeDetail;
