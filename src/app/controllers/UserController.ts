import UserModel from "../database/UserModel"
import { Request, Response } from "express";


const UserController = {
    async index(req: Request, res: Response) {
        try {
            const result = await UserModel.find()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json(error)
        }
        
    },

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await UserModel.findById(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json(error)
        }
    },

    async create(req: Request, res: Response) {
        try {
            const payload = req.body
            const result = await UserModel.create(payload)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
        
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body
            const result = await UserModel.findByIdAndUpdate(id, payload)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            await UserModel.findByIdAndDelete(id)
            return res.status(200)
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}

export default UserController