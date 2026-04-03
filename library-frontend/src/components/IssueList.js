import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllIssues, returnBook } from '../services/api';

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = () => {
    getAllIssues().then(res => setIssues(res.data));
  };

  const handleReturn = (id) => {
    if (window.confirm('Return this book?')) {
      returnBook(id).then(() => loadIssues());
    }
  };

  return (
    <div style={{padding: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
        <h1>Issues</h1>
        <Link to="/issue-book" style={{background: '#fd7e14', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none'}}>Issue Book</Link>
      </div>
      <table style={{width: '100%', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        <thead style={{background: '#667eea', color: 'white'}}>
          <tr>
            <th style={{padding: '12px'}}>ID</th>
            <th style={{padding: '12px'}}>Book</th>
            <th style={{padding: '12px'}}>User</th>
            <th style={{padding: '12px'}}>Status</th>
            <th style={{padding: '12px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <tr key={issue.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '12px'}}>{issue.id}</td>
              <td style={{padding: '12px'}}>{issue.book?.title}</td>
              <td style={{padding: '12px'}}>{issue.user?.name}</td>
              <td style={{padding: '12px'}}>{issue.returned ? '✅ Returned' : '📤 Active'}</td>
              <td style={{padding: '12px'}}>
                {!issue.returned && (
                  <button onClick={() => handleReturn(issue.id)} style={{background: '#28a745', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px'}}>Return</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssueList;