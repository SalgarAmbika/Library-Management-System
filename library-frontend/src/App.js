import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import IssueBook from './components/IssueBook';
import IssueList from './components/IssueList';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/issues" element={<IssueList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;