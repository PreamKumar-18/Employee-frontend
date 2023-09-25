import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function EmployeeEdit() {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id } = useParams();
 

  useEffect(() => {
    // Fetch the existing employee data based on the ID in the URL
    axios
      .get(`https://localhost:7082/api/Employee/${id}`)
      .then((response) => {
        setEmployeeData(response.data);
        setFormData(response.data); // Set initial form data
      })
      .catch((error) => {
        console.error("Error fetching Employee:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://localhost:7082/api/Employee/${id}`, formData)
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log("Error Updating Employee", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border p-3 p-4">
          <h2 className="pl-3">Update Employee</h2>
          <br />
          <div className="mb-3">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary m-3">
              Update
            </button>
            <Link to="/" className="btn btn-danger">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeEdit;
