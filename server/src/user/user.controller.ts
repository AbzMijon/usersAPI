import { Request, Response, Router } from "express";
import { UserService } from "./user.service";
import { authmiddleware } from "../auth.middleware";
import { createUserDto } from "./user.dto";

const router: any = Router();

const userService = new UserService();

router.post('/', authmiddleware, (req: Request, res: Response) => {
    const validation = createUserDto.safeParse(req.body);

    if(!validation.success) {
        return res.status(400).json({ message: validation.error.errors[0].message })
    }
    const user = userService.createUser(req.body);
    res.status(201).json(user);
});

export const userRouter = router;