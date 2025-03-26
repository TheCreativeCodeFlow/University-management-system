import React from 'react';

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your student portal dashboard</p>
      <div className="stats">
        <div className="card">
          <h3>Attendance</h3>
          <p>85%</p>
        </div>
        <div className="card">
          <h3>CGPA</h3>
          <p>9.3</p>
        </div>
        <div className="card">
          <h3>Assessments</h3>
          <p>3 Upcoming</p>
        </div>
        <div className="card">
          <h3>Courses</h3>
          <p>5 Enrolled</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;