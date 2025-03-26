import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EnrolledCourses from './components/EnrolledCourses';
import Attendance from './components/Attendance';
import MarksCGPA from './components/MarksCGPA';
import InternalAssessments from './components/InternalAssesments';
import Profile from './components/Profile';

function App() {
  // For simplicity, we'll use a state to simulate login status
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login Page */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <div className="app-container">
                  <Sidebar />
                  <div className="main-content">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/courses" element={<EnrolledCourses />} />
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/marks" element={<MarksCGPA />} />
                      <Route path="/assessments" element={<InternalAssessments />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </div>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;