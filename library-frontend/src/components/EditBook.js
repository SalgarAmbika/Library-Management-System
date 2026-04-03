import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../services/api';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({title: '', author: '', isbn: '', genre: ''});

  useEffect(() => {
    getBookById(id).then(res => setBook(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(id, book).then(() => navigate('/books'));
  };

  return (
    <div style={{maxWidth: '500px', margin: '20px auto', background: 'white', padding: '30px', borderRadius: '12px'}}>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Title</label>
          <input style={{width: '100%', padding: '8px'}} value={book.title} onChange={e => setBook({...book, title: e.target.value})} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Author</label>
          <input style={{width: '100%', padding: '8px'}} value={book.author} onChange={e => setBook({...book, author: e.target.value})} required />
        </div>
        <button type="submit" style={{background: '#667eea', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Update</button>
      </form>
    </div>
  );
}

export default EditBook;