import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function EmployeeCreate() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7082/api/Employee", formData)
      .then((response) => {
        console.log(response);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
          });
      })
      .catch((error) => {
        console.log("Error Creating Employee", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border p-3 p-4">
          <h2 className="pl-3">Create Employee</h2>
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
            <Link to="/" type="submit" className="btn btn-primary m-3">Create</Link>
            <Link to="/" type="button" className="btn btn-danger">Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployeeCreate;
