import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getAllBooks = () => axios.get(`${BASE_URL}/books`);
export const getBookById = (id) => axios.get(`${BASE_URL}/books/${id}`);
export const addBook = (book) => axios.post(`${BASE_URL}/books`, book);
export const updateBook = (id, book) => axios.put(`${BASE_URL}/books/${id}`, book);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/books/${id}`);

export const getAllUsers = () => axios.get(`${BASE_URL}/users`);
export const addUser = (user) => axios.post(`${BASE_URL}/users`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);

export const issueBook = (bookId, userId) => axios.post(`${BASE_URL}/issues/issue?bookId=${bookId}&userId=${userId}`);
export const returnBook = (issueId) => axios.put(`${BASE_URL}/issues/return/${issueId}`);
export const getAllIssues = () => axios.get(`${BASE_URL}/issues`);
export const getActiveIssues = () => axios.get(`${BASE_URL}/issues/active`);