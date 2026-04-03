import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/api';

function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({title: '', author: '', isbn: '', genre: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book).then(() => navigate('/books'));
  };

  return (
    <div style={{maxWidth: '500px', margin: '20px auto', background: 'white', padding: '30px', borderRadius: '12px'}}>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Title</label>
          <input style={{width: '100%', padding: '8px'}} value={book.title} onChange={e => setBook({...book, title: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Author</label>
          <input style={{width: '100%', padding: '8px'}} value={book.author} onChange={e => setBook({...book, author: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>ISBN</label>
          <input style={{width: '100%', padding: '8px'}} value={book.isbn} onChange={e => setBook({...book, isbn: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Genre</label>
          <select style={{width: '100%', padding: '8px'}} value={book.genre} onChange={e => setBook({...book, genre: e.target.value})} required>
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
        </div>
        <button type="submit" style={{background: '#667eea', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;