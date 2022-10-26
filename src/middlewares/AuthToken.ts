import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

function checkToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const Token = authHeader && authHeader.split(' ')[1]

    if(!Token) {
        return res.status(401).json({msg: 'Acesso Negado!'})
    }

    try {
        const secret = process.env.SECRET
        jwt.verify(Token, secret)

        next()

    } catch (error) {
        res.status(400).json('Token Inválido')
    }
}

export default checkToken
