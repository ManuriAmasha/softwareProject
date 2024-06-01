import express from 'express'
const router = express.Router();
import * as ForumCommentController from '../Controllers/ForumCommentController.js';

router.post('/add-comment',ForumCommentController.AddComment);
router.get('/get-forum-comment-by-id/:id',ForumCommentController.GetforumcommentbyId);
router.delete('/delete-all-forum-comments', ForumCommentController.Deleteforumcomment);
router.get('/get-comments',ForumCommentController.GetAllComment);
router.delete('/delete-forum-comment-by-id/:id', ForumCommentController.DeleteForumcommentbyId);

export default router;