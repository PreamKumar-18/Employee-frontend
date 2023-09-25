import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employee, setEmployee] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7082/api/Employee")
      .then((response) => {
        console.log("Employee List", response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log("Employee List Error", error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployee = employee.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-6">
          <h2>Employee List</h2>
        </div>
        <div className="col-md-6 text-md-end">
          <Link to="/create" type="button" className="btn btn-primary">
            <i className="bi bi-plus-circle"></i> Add Employee
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="form-control"
            value={searchTerm}
          />
        </div>
      </div>

      <table className="table table-bordered table-striped table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployee.map((item, key) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <div className="w-75 btn-group" role="group">
                  <Link
                    to={`/detail/${item.id}`}
                    className="btn btn-primary"
                    title="Details"
                  >
                    <i className="bi bi-info"></i>
                  </Link>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-warning"
                    title="Edit"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Link
                    to={`/delete/${item.id}`}
                    className="btn btn-danger"
                    title="Delete"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>{" "}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
