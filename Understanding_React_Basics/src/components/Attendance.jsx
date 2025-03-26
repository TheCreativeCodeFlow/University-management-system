import React from 'react';

function Attendance() {
  const attendanceData = [
    { course: 'Database Management System', date: '2023-03-01', status: 'Present', percentage: 98 },
    { course: 'Artificial Intelligence', date: '2023-03-02', status: 'Present', percentage: 96 },
    { course: 'Probability and Statistics', date: '2023-03-03', status: 'Absent', percentage: 89 },
    { course: 'Data Analysis of Algorithm', date: '2023-03-04', status: 'Present', percentage: 100 },
    { course: 'Big Data Tools and Techniques', date: '2023-03-05', status: 'Late', percentage: 92 },
  ];

  return (
    <div className="page">
      <h1>Attendance</h1>
      <div className="attendance-grid">
        <div className="chart-section">
          <h3>Attendance by Course</h3>
          <p>Your attendance percentage for each enrolled course</p>
          <div className="bar-chart">
            <div className="bar" style={{ height: '75%' }}><span>21CSC205P</span></div>
            <div className="bar" style={{ height: '72%' }}><span>21CSC206T</span></div>
            <div className="bar" style={{ height: '65%' }}><span>21MAB301T</span></div>
            <div className="bar" style={{ height: '80%' }}><span>21CSC204J</span></div>
            <div className="bar" style={{ height: '70%' }}><span>21CSE222T</span></div>
          </div>
        </div>
        <div className="summary-section">
          <h3>Attendance Summary</h3>
          <p>Your overall attendance is 85%</p>
        </div>
      </div>
      <div className="records-section">
        <h3>Attendance Records</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <select>
            <option>All</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Date</th>
              <th>Status</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td>{record.course}</td>
                <td>{record.date}</td>
                <td>
                  <span className={`status ${record.status.toLowerCase()}`}>{record.status}</span>
                </td>
                <td>{record.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;