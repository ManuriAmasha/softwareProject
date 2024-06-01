import express from 'express'
const router = express.Router();
import * as UserController from '../Controllers/UserController.js';

router.post('/create-user', UserController.createUser);
router.get('/get-all-users', UserController.GetUser);
router.get('/get-user-by-id/:id',UserController.GetUserbyId);
router.delete('/delete-all-users', UserController.DeleteUser);
router.delete('/delete-user-by-id/:id', UserController.DeleteUserbyId);



export default router;