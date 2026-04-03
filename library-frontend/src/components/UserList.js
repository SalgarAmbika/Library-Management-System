import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser } from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete user?')) {
      deleteUser(id).then(() => setUsers(users.filter(u => u.id !== id)));
    }
  };

  return (
    <div style={{padding: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
        <h1>Users</h1>
        <Link to="/add-user" style={{background: '#28a745', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none'}}>Add User</Link>
      </div>
      <table style={{width: '100%', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        <thead style={{background: '#667eea', color: 'white'}}>
          <tr><th style={{padding: '12px'}}>ID</th><th style={{padding: '12px'}}>Name</th><th style={{padding: '12px'}}>Email</th><th style={{padding: '12px'}}>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '12px'}}>{user.id}</td>
              <td style={{padding: '12px'}}>{user.name}</td>
              <td style={{padding: '12px'}}>{user.email}</td>
              <td style={{padding: '12px'}}>
                <button onClick={() => handleDelete(user.id)} style={{background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;