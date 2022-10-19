import UserModel from "../database/UserModel"
import { Request, Response } from "express";
import UserService from "../service/UserService";
import getCorrectPayload from "../utils/Payload";

const UserController = {
    async index(req: Request, res: Response) {
        try {
            const result = await UserService.find(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json(error)
        }
        
    },

    async findById(req: Request, res: Response) {
        try {
            const result = await UserModel.findById(req)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json(error)
        }
    },

    async create(req: Request, res: Response) {
        try {
            const payload = getCorrectPayload(req.body)
            const result = await UserService.create(payload)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
        
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = getCorrectPayload(req.body)
            const result = await UserService.update(payload, id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async delete(req: Request, res: Response) {
        try {
            await UserService.delete(req)
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}

export default UserController