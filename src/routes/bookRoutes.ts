import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookControllers';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', addBook);

export default router;