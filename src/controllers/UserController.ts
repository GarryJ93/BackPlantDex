import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService = new UserService();

    async signUp(req: Request, res: Response) {
        const name = req.body.name;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.rôle;

        const createdUser = await this.userService.signUp(name, username, email, password, role);

        if (!createdUser) {
            res.status(500).send({ status: "FAILED", message: "Oups..." });
            return;
        }
        res.status(201).send({ status: "OK", data: createdUser });
    }

    async login(req: Request, res: Response) {
        const email = req.body.email;
        const password = req.body.password;

        const token = await this.userService.login(email, password);

        if (!token) {
            res.status(500).send({ status: "FAILED", message: "Oups..." });
            return;
        }
        res.send({ status: "OK", data: token });
    }
}