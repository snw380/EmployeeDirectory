import React from 'react';
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import Header from "../components/header/header"
import data from '../data/employees.json';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }

    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    console.log(key)
    this.setState({
      data: data.sort((a, b) => a[key] - b[key])
    })
  }

  render() {
    return (
      <div className="page-container">       
        <Header/>
        <EmployeeTable 
        data={this.state.data}
        sortBy={this.sortBy}
        />
      </div>
    );
  }
};

export default Home;
