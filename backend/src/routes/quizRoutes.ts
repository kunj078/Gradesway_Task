import { Router } from 'express';
import { createQuiz, getQuizzes, getQuizById, updateQuiz, deleteQuiz } from '../controllers/quizController';
import { isAuthenticated } from '../middleware/authMiddleware';

const router = Router();

router.use(isAuthenticated); // All routes below require authentication

router.post('/', createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuizById);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

export default router;
