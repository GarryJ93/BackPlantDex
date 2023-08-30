import { Request, Response, Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signup', (req: Request, res: Response) => {
    userController.signUp(req, res);
})

userRouter.post('/login', (req: Request, res: Response) => {
    userController.login(req, res);
})



export default userRouter;