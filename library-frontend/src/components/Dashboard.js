import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks, getAllUsers, getActiveIssues } from '../services/api';

function Dashboard() {
  const [counts, setCounts] = useState({books: 0, users: 0, issues: 0});

  useEffect(() => {
    Promise.all([getAllBooks(), getAllUsers(), getActiveIssues()])
      .then(([b, u, i]) => setCounts({books: b.data.length, users: u.data.length, issues: i.data.length}));
  }, []);

  return (
    <div style={{textAlign: 'center', padding: '40px'}}>
      <h1>📚 Library Dashboard</h1>
      <div style={{display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px'}}>
        <div style={{background: 'white', padding: '30px', borderRadius: '12px', width: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
          <div style={{fontSize: '2rem'}}>📖</div>
          <h2>{counts.books}</h2>
          <p>Books</p>
        </div>
        <div style={{background: 'white', padding: '30px', borderRadius: '12px', width: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
          <div style={{fontSize: '2rem'}}>👥</div>
          <h2>{counts.users}</h2>
          <p>Users</p>
        </div>
        <div style={{background: 'white', padding: '30px', borderRadius: '12px', width: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
          <div style={{fontSize: '2rem'}}>📋</div>
          <h2>{counts.issues}</h2>
          <p>Active Issues</p>
        </div>
      </div>
      <div style={{marginTop: '40px'}}>
        <Link to="/add-book" style={{margin: '10px', padding: '10px 20px', background: '#667eea', color: 'white', textDecoration: 'none', borderRadius: '8px'}}>Add Book</Link>
        <Link to="/add-user" style={{margin: '10px', padding: '10px 20px', background: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '8px'}}>Add User</Link>
        <Link to="/issue-book" style={{margin: '10px', padding: '10px 20px', background: '#fd7e14', color: 'white', textDecoration: 'none', borderRadius: '8px'}}>Issue Book</Link>
      </div>
    </div>
  );
}

export default Dashboard;