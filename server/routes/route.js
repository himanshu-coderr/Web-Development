import express from 'express'
import { createPost, getAllPosts,deletePost, getPost, updatePost } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createPost);

router.get('/posts', getAllPosts);

router.get('/post/:id',getPost)

router.put('/update/:id',updatePost);

router.delete('/delete/:id', deletePost);

export default router;