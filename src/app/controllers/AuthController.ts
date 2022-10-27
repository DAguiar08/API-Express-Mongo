import { Request, Response } from "express"
import AuthService from "../service/AuthService"

const AuthController = {

async Login(req: Request, res: Response) {
    try {
        const {email, password} = req.body
        const result = await AuthService.auth(email, password)
            res.status(200).json(result)
    } catch (error) {
        return res.status(401).json({ error })
    }
    },

async Auth(req: Request, res: Response) {
    try {
        const {email, password} = req.body
        await AuthService.auth(email, password)
            res.status(200).json("Autenticado com sucesso!")
    } catch (error) {
        return res.status(401).json({ error })
    }
}
}

export default AuthController