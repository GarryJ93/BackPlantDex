import AppDataSource from "../data-source";
import { User } from "../entities/User";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async signUp(name: string, username: string, email: string, password: string, role: string) {
        const rounds = 10;
        try {
            const hash = await bcrypt.hash(password, rounds);

            const newUser = this.userRepository.create({
                name: name,
                username: username,
                email: email,
                password: hash,
                rôle: role
            });
            const createdUser = await this.userRepository.save(newUser);
            return createdUser;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(email: string, password: string) {
        const found = await this.userRepository.findOneBy({ email: email });
        if (!found) {
            return null;
        }

        const token = jwt.sign({ sub: found.id, email: found.email }, process.env.JWT_SECRET, { expiresIn: "30min" });
        return token;
    }
}