import React from 'react';

function Profile() {
  return (
    <div className="page">
      <h1>Profile</h1>
      <div className="profile-card">
        <h3>Profile Information</h3>
        <p>View and update your personal information</p>
        <div className="profile-details">
          <div className="avatar"></div>
          <h4>Shivam Kumar Sah</h4>
          <p>RA2311027050033</p>
          <div className="info">
            <p><strong>Full Name</strong></p>
            <p>Shivam Kumar Sah</p>
          </div>
          <div className="info">
            <p><strong>Email Address</strong></p>
            <p>shivamsah@university.edu</p>
            <p className="subtext">This is your contact email for notifications</p>
          </div>
          <div className="info">
            <p><strong>Student ID</strong></p>
            <p>RA2311027050033</p>
            <p className="subtext">Student ID cannot be changed</p>
          </div>
          <div className="info">
            <p><strong>Batch</strong></p>
            <p>2023-2027</p>
          </div>
          <div className="info">
            <p><strong>Department</strong></p>
            <p>Computer Science and Engineering with Big Data Analytics</p>
          </div>
          <button className="update-btn">Update Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;