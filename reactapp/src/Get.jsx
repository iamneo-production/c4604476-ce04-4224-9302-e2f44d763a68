import axios from "axios";
import React, { Component } from "react";
import './Get.css'
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div>
        <center>  
        <h3>Results</h3> 
        <br/>
      <table border={1}>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Email</th>
          <th>PhoneNo</th>
          <th>Restaurant Name</th>
          <th>No of times visited</th>
          <th>Greeted Rating</th>
          <th>Waiting Time</th>
          <th>Service Rating</th>
          <th>Food Menu</th>
          <th>Quality</th>
          <th>Favourite Dish</th>
          <th>Hygiene</th>
          <th>Taste</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.userid}>
            <td>{user.userid}</td>
            <td>{user.email}</td>
            <td>{user.phoneno}</td>
            <td>{user.qone}</td>
            <td>{user.qtwo}</td>
            <td>{user.qthree}</td>
            <td>{user.qfour}</td>
            <td>{user.qfive}</td>
            <td>{user.qsix}</td>
            <td>{user.qseven}</td>
            <td>{user.qeight}</td>
            <td>{user.qnine}</td>
            <td>{user.qten}</td>
            <td>{user.qeleven}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </center>
    </div>
    );
  }}
  
export default Get;