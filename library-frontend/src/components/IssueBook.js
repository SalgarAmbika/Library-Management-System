import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBooks, getAllUsers, issueBook } from '../services/api';

function IssueBook() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data.filter(b => b.available)));
    getAllUsers().then(res => setUsers(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    issueBook(bookId, userId).then(() => navigate('/issues'));
  };

  return (
    <div style={{maxWidth: '500px', margin: '20px auto', background: 'white', padding: '30px', borderRadius: '12px'}}>
      <h1>Issue Book</h1>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Book</label>
          <select style={{width: '100%', padding: '8px'}} value={bookId} onChange={e => setBookId(e.target.value)} required>
            <option value="">Select Book</option>
            {books.map(b => <option key={b.id} value={b.id}>{b.title}</option>)}
          </select>
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>User</label>
          <select style={{width: '100%', padding: '8px'}} value={userId} onChange={e => setUserId(e.target.value)} required>
            <option value="">Select User</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
        <button type="submit" style={{background: '#fd7e14', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Issue Book</button>
      </form>
    </div>
  );
}

export default IssueBook;