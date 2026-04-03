import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../services/api';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data));
  }, []);

  const handleDelete = (id, title) => {
    if (window.confirm(`Delete ${title}?`)) {
      deleteBook(id).then(() => setBooks(books.filter(b => b.id !== id)));
    }
  };

  return (
    <div style={{padding: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
        <h1>Books</h1>
        <Link to="/add-book" style={{background: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none'}}>Add Book</Link>
      </div>
      <table style={{width: '100%', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        <thead style={{background: '#667eea', color: 'white'}}>
          <tr>
            <th style={{padding: '12px'}}>ID</th>
            <th style={{padding: '12px'}}>Title</th>
            <th style={{padding: '12px'}}>Author</th>
            <th style={{padding: '12px'}}>Status</th>
            <th style={{padding: '12px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '12px'}}>{book.id}</td>
              <td style={{padding: '12px'}}>{book.title}</td>
              <td style={{padding: '12px'}}>{book.author}</td>
              <td style={{padding: '12px'}}>{book.available ? '✅ Available' : '📤 Issued'}</td>
              <td style={{padding: '12px'}}>
                <Link to={`/edit-book/${book.id}`} style={{marginRight: '10px', color: '#17a2b8'}}>Edit</Link>
                <button onClick={() => handleDelete(book.id, book.title)} style={{background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;