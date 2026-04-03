import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        📚 Library System
      </Link>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/books" style={{ color: 'white', textDecoration: 'none' }}>Books</Link>
        <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users</Link>
        <Link to="/issue-book" style={{ color: 'white', textDecoration: 'none' }}>Issue</Link>
        <Link to="/issues" style={{ color: 'white', textDecoration: 'none' }}>Issues</Link>
      </div>
    </nav>
  );
}

export default Navbar;