import UserRepository from "../repository/UserRepository"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class AuthService {
    async auth(email: string, password: string) {
        const user = await UserRepository.auth(email)

        if(!user) {
            throw new Unauthorized(`${email} not found!`);
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) {
            throw new Unauthorized(`Invalid Password!`);
        }
        
            const secret = process.env.SECRET
            const token = jwt.sign(
                {
                    id: user._id
                },
                secret
        )
        return { token, email: user.email}
    }
}


export default new AuthService()