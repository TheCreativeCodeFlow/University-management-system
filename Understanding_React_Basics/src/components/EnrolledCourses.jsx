import React from 'react';

function EnrolledCourses() {
  const courses = [
    { code: '21CSC205P', name: 'Database Management System', credits: 4, instructor: 'Dr. Shajeena', email: 'shajeena@university.edu', schedule: 'Mon, Wed 10:00-11:30', room: 'IST-617' },
    { code: '21CSC206T', name: 'Artificial Intelligence', credits: 3, instructor: 'Dr. Y. Suganya', email: 'y.suganya@university.edu', schedule: 'Tue, Thu 13:00-14:30', room: 'IST-425' },
    { code: '21MAB301T', name: 'Probability and Statistics', credits: 4, instructor: 'Dr. Sivalji', email: 'sivalji@university.edu', schedule: 'Mon, Wed 13:00-14:30', room: 'IST-210' },
    { code: '21CSC204J', name: 'Data Analysis of Algorithm', credits: 4, instructor: 'Dr. Kalavanan', email: 'kalavanan@university.edu', schedule: 'Fri 10:00-12:00', room: 'IST-628' },
    { code: '21CSE222T', name: 'Big Data Tools and Techniques', credits: 3, instructor: 'Dr. K. Deepa', email: 'k.deepa@university.edu', schedule: 'Tue, Thu 10:00-11:30', room: 'IST-610' },
  ];

  return (
    <div className="page">
      <div className="header">
        <h1>Enrolled Courses</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <span className="course-count">5 courses</span>
        </div>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.name}</h3>
            <p>{course.code} • {course.credits} Credits</p>
            <p>{course.instructor}</p>
            <p>{course.email}</p>
            <p>Schedule: {course.schedule}</p>
            <p>Room: {course.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnrolledCourses;