import express from 'express'
const router = express.Router();
import * as ForumSubCommentController  from '../Controllers/ForumSubCommentController.js';

router.post('/Create-Sub-comment',ForumSubCommentController.createforumsubcomment);
router.get('/get-sub-comment',ForumSubCommentController.Getsubcomment);
router.get('/get-forum-sub-comment-by-id/:id',ForumSubCommentController.GetforumsubcommentbyId);
router.delete('/delete-all-sub-comments/',ForumSubCommentController.deletesubforum);
router.delete('/delete-forum-sub-comment-by-id/:id',ForumSubCommentController.DeletesubforumbyId);

export default router;