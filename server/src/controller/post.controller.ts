import { Request, Response } from "express";
import { db } from "@/db";

class PostController {
    async createPost(req: Request, res: Response) {
        const { title, content, userId } = req.body;
        const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId]);
        res.status(201).json(newPost.rows?.[0]);
    }
    async getPosts(req: Request, res: Response) {
        const posts = await db.query('SELECT * FROM post');
        res.status(200).json(posts.rows);
    }
    async getUserPosts(req: Request, res: Response) {
        const id = req.query.userId;
        const post = await db.query('SELECT * FROM post where user_id = $1', [id]);
        res.status(200).json(post.rows);
    }
    async deleteUserPost(req: Request, res: Response) {
        const { id } = req.body;
        await db.query('DELETE FROM post where id = $id', [id]);
        res.status(200).json({ message: 'Deleted' })
    }
}

export const postController = new PostController();