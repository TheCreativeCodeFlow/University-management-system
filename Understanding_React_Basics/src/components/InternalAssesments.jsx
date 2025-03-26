import React from 'react';

function InternalAssessments() {
  const assessments = [
    { course: 'Database Management System', title: 'Mid-term Examination', type: 'Midterm', dueDate: '2023-05-18', status: 'Upcoming', marks: '-' },
    { course: 'Artificial Intelligence', title: 'Assignment 2: Binary Search Tree', type: 'Assignment', dueDate: '2023-04-10', status: 'Upcoming', marks: '-' },
    { course: 'Probability and Statistics', title: 'Quiz 3: Sample Hypothesis', type: 'Quiz', dueDate: '2023-04-05', status: 'Upcoming', marks: '-' },
    { course: 'Data Analysis of Algorithm', title: 'Review Submission', type: 'Research Paper', dueDate: '2023-04-25', status: 'Completed', marks: '18/36' },
    { course: 'Big Data Tools and Techniques', title: 'Quiz 1: Hadoop Basics', type: 'Quiz', dueDate: '2023-03-23', status: 'Completed', marks: '28/36' },
  ];

  return (
    <div className="page">
      <h1>Internal Assessments</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search assessments..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Title</th>
            <th>Type</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment, index) => (
            <tr key={index}>
              <td>{assessment.course}</td>
              <td>{assessment.title}</td>
              <td>{assessment.type}</td>
              <td>{assessment.dueDate}</td>
              <td>
                <span className={`status ${assessment.status.toLowerCase()}`}>{assessment.status}</span>
              </td>
              <td>{assessment.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InternalAssessments;