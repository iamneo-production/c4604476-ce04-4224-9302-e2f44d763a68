import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import './Csv.css'

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:8082/api/v1/user/get')
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {tableData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
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
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.userid}</td>
                  <td>{row.email}</td>
                  <td>{row.phoneno}</td>
                  <td>{row.qone}</td>
                  <td>{row.qtwo}</td>
                  <td>{row.qthree}</td>
                  <td>{row.qfour}</td>
                  <td>{row.qfive}</td>
                  <td>{row.qsix}</td>
                  <td>{row.qseven}</td>
                  <td>{row.qeight}</td>
                  <td>{row.qnine}</td>
                  <td>{row.qten}</td>
                  <td>{row.qeleven}</td>
                </tr>
              ))}
            </tbody>
          </table><br/><br/>
          <center>
        <button className='csvbutton'>
          <CSVLink data={tableData} filename={'table_data.csv'}>
            Download Table as CSV
          </CSVLink>
        </button></center>
        </>
      )}
    </div>
  );
};

export default TableComponent;