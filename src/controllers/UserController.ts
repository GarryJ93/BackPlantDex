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
        try {
            const {email, password}= req.body;
            console.log(req.body)
            const token = await this.userService.login(email, password);
            if(!token){
                return res.status(400).send({status: 'KO', message: 'Authentification échoué ou token non généré'})
            }
            res.send({status : "OK", access_token: token})
        } catch (error) {
            res.status(400).send({status: "KO", message: error.message})
        }

    }
}