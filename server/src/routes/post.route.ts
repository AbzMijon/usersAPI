import { postController } from "@/controller/post.controller";
import { Router } from "express";

const router = Router();

router.post('/post', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/person/posts', postController.getUserPosts);
router.delete('/user', postController.deleteUserPost);

export const postRouter = router;