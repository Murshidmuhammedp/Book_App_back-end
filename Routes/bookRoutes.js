import express from 'express'
import { bookCreate, deleteBook, getAllBook, getBookById } from '../Controllers/bookController.js';

const router = express.Router();

// Create a new book
router.post('/books', bookCreate);

// Get all books
router.get('/books', getAllBook);

// Get a single book by ID
router.get('/books/:id', getBookById);

// Delete a blog by ID
router.delete('/books/:id', deleteBook);

export default router;

