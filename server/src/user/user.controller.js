import { Router } from "express";
import { UserService } from "./user.service.js";

const router = Router();

const userService = new UserService();

router.post('/', (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
});

export const userRouter = router;