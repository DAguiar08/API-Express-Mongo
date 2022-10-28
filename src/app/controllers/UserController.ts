import { Request, Response } from "express";
import UserService from "../service/UserService";
import getCorrectPayload from "../utils/Payload";
import logger from "../loggers/Logger";
import ErrorLogger from "../loggers/ErrorLogger";

const UserController = {
    async index(req: Request, res: Response) {
        try {
            const result = await UserService.find(req.query)
            logger.info('Successfully got list of Users')
            return res.status(200).json(result)
        } catch (error) {
            ErrorLogger.error(error)
            return res.status(error.errorStatus || 400).json(error.message || { error });
        }
        
    },

    async findById(req: Request, res: Response) {
        try {
            const result = await UserService.findById(req)
            logger.info('Successfully got a User')
            return res.status(200).json(result)
        } catch (error) {
            ErrorLogger.error(error)
            return res.status(error.errorStatus || 400).json(error.message || { error });
        }
    },

    async create(req: Request, res: Response) {
        try {
            const payload = await getCorrectPayload(req.body)
            const result = await UserService.create(payload)
            logger.info('Successfully created an User')
            return res.status(201).json(result)
        } catch (error) {
            ErrorLogger.error(error)
            return res.status(error.errorStatus || 500).json(error.message || { error });
        }
        
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = await getCorrectPayload(req.body)
            const result = await UserService.update(payload, id)
            logger.info('Successfully updated an User')
            return res.status(200).json(result)
        } catch (error) {
            ErrorLogger.error(error)
            return res.status(error.errorStatus || 400).json(error.message || { error });
        }
    },

    async updateOne(req: Request, res: Response) {
        try {
          const payload = await getCorrectPayload(req.body)
          const { id } = req.params;
          const result = await UserService.update(payload, id);
          logger.info('Successfully updated a product')
          return res.status(200).json(result);
        } catch (error) {
          ErrorLogger.error(error)
          return res.status(error.errorStatus || 400).json(error.message || { error });
        }
      },

    async delete(req: Request, res: Response) {
        try {
            await UserService.delete(req)
            logger.info('Successfully deleted an User')
            return res.status(204).send();
        } catch (error) {
            ErrorLogger.error(error)
            return res.status(error.errorStatus || 400).json(error.message || { error });
        }
    }
}

export default UserController