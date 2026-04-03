import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/api';

function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({name: '', email: '', phone: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user).then(() => navigate('/users'));
  };

  return (
    <div style={{maxWidth: '500px', margin: '20px auto', background: 'white', padding: '30px', borderRadius: '12px'}}>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Name</label>
          <input style={{width: '100%', padding: '8px'}} value={user.name} onChange={e => setUser({...user, name: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Email</label>
          <input type="email" style={{width: '100%', padding: '8px'}} value={user.email} onChange={e => setUser({...user, email: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Phone</label>
          <input style={{width: '100%', padding: '8px'}} value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} required />
        </div>
        <button type="submit" style={{background: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;