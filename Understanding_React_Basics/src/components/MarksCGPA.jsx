import React from 'react';

function MarksCGPA() {
  const marksData = [
    { code: '21CSC205P', subject: 'Database Management System', credits: 4, marks: '98/100', grade: 'O' },
    { code: '21CSC206T', subject: 'Artificial Intelligence', credits: 3, marks: '96/100', grade: 'O' },
    { code: '21MAB301T', subject: 'Probability and Statistics', credits: 4, marks: '89/100', grade: 'A+' },
    { code: '21CSC204J', subject: 'Data Analysis of Algorithm', credits: 4, marks: '99/100', grade: 'A+' },
    { code: '21CSE222T', subject: 'Big Data Tools and Techniques', credits: 3, marks: '98/100', grade: 'O' },
  ];

  return (
    <div className="page">
      <h1>Marks & CGPA</h1>
      <div className="cgpa-grid">
        <div className="chart-section">
          <h3>CGPA Trend</h3>
          <p>Your CGPA progression across semesters</p>
          <div className="line-chart">
            <div className="line"></div>
            <div className="point" style={{ left: '0%', top: '0%' }}></div>
            <div className="point" style={{ left: '50%', top: '20%' }}></div>
            <div className="point" style={{ left: '100%', top: '10%' }}></div>
            <span className="label">Sem 1</span>
            <span className="label" style={{ left: '50%' }}>Sem 2</span>
            <span className="label" style={{ left: '100%' }}>Sem 3</span>
          </div>
        </div>
        <div className="summary-section">
          <h3>CGPA Summary</h3>
          <p>9.3</p>
          <p>Current semester CGPA: 9.5</p>
        </div>
      </div>
      <div className="marks-section">
        <h3>Subject Marks</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search subjects..." />
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((record, index) => (
              <tr key={index}>
                <td>{record.code}</td>
                <td>{record.subject}</td>
                <td>{record.credits}</td>
                <td>{record.marks}</td>
                <td>{record.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarksCGPA;