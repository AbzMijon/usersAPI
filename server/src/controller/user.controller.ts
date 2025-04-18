import { Request, Response } from "express";
import { db } from '@/db';

class UserController {
    async createUser(req: Request, res: Response) {
        const { name, surname } = req.body;
        const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
        res.status(201).json(newPerson.rows?.[0]);
    }
    async getUsers(req: Request, res: Response) {
        const users = await db.query('SELECT * FROM person');
        res.status(200).json(users.rows);
    }
    async getOneUser(req: Request, res: Response) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM person where id = $1', [id]);
        res.status(200).json(user.rows?.[0])
    }
    async updateUser(req: Request, res: Response) {
        const { id, name, surname } = req.body;
        const updatedUser = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id]);
        res.status(200).json(updatedUser.rows?.[0]);
    }
    async deleteUser(req: Request, res: Response) {
        const { id } = req.body;
        await db.query('DELETE FROM person where id = $1', [id]);
        res.status(200).json({ message: 'Deleted' })
    }
};

export const userController = new UserController();