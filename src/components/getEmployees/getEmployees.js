import React, { Component } from "react";
import employees from "../employees/employees";

class GetEmployees extends Component {
    constructor(props){
        super(props);
        this.state = {
            employees: employees
        };
    }

    render() {
        const {employees} = this.state;
        return(
            <div>
                <div>
                    <select name="type" id="type">
                    <option disabled selected>Sort: </option>
                    <option value="position">Position</option>
                    <option value="job-title">JobTitle</option>
                    </select>
                </div>
                <ol className="item">
                {
                    employees.map(employee => (
                        <li key={employee.id} align="start">
                            <div>
                                <p className="title">Name: {employee.firstName} {employee.lastName}</p>
                                <p className="body">JobTitle: {employee.JobTitle}</p>
                                <p className="body">Age: {employee.age}</p>
                                <p className="body">Position: {employee.position}</p>
                            </div>
                        </li>
                    )) 
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetEmployees;