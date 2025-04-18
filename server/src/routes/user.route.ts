import { userController } from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.post('/user', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

export const userRouter = router;