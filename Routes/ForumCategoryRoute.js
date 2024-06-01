import express from 'express'
const router = express.Router();
import * as ForumCategoryController  from '../Controllers/ForumCategoryController.js';

router.post('/create-category', ForumCategoryController.CreateForumCategory);
router.get('/get-all-categories', ForumCategoryController.GetForumCategories);
router.get('/get-Forum-Category-by-id/:id', ForumCategoryController.GetforumcategorybyId);
router.delete('/delete-all-Forum-Categories', ForumCategoryController.DeleteforumCategory);
router.delete('/delete-forum-category-by-id/:id', ForumCategoryController.DeleteForumcategorybyId);
export default router;