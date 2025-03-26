import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Student Portal</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <span className="icon">🏠</span> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/attendance" activeClassName="active">
              <span className="icon">📅</span> Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/marks" activeClassName="active">
              <span className="icon">📊</span> Marks
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName="active">
              <span className="icon">📚</span> Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/assessments" activeClassName="active">
              <span className="icon">📝</span> Assessments
            </NavLink>
          </li>
          <li>
            <NavLink to="/chatbot" activeClassName="active">
              <span className="icon">💬</span> Chatbot
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <span className="icon">👤</span> Profile
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;