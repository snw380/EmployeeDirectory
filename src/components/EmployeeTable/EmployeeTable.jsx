import React from "react";

export default function EmployeeTable(props) {
    return (
        <table className="table">
            <thead className="header">
                <tr>
                    <th>
                        <button onClick={() => props.sortBy('id')}>#</button>
                    </th>
                    <th>
                        <button>First Name</button>
                    </th>
                    <th>
                        <button>Last Name</button>
                    </th>
                    <th>
                        <button onClick={() => props.sortBy('age')}>Age</button>
                    </th>
                    <th>
                        <button>Job Title</button>
                    </th>
                    <th>
                        <button>Position</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.age}</td>
                            <td>{row.jobTitle}</td>
                            <td>{row.position}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}