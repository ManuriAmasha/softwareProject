import express from 'express'
const router = express.Router();
import * as QuestionController from '../Controllers/QuestionController.js';

router.post('/create-question', QuestionController.AddQuestion);
router.get('/get-all-questions', QuestionController.GetQuestion);
router.get('/get-question-by-id/:id', QuestionController.GetQuestionbyId);
router.delete('/delete-all-questions',QuestionController.DeleteQuestions);
router.delete('/delete-question-by-id/:id',QuestionController.deletequestionbyId);

export default router;