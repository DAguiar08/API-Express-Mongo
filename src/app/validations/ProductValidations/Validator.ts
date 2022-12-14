import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import ErrorLogger from "../../loggers/ErrorLogger";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      title: Joi.string().trim().required(),
      description: Joi.string().trim().required(),
      departament: Joi.string().trim().required(),
      brand: Joi.string().trim().required(),
      price: Joi.number().min(0.01).max(1000).required(),
      qtd_stock: Joi.number().max(100000).required(),
      bar_codes: Joi.string().length(13).trim().required(),
      stock_control_enebled: Joi.boolean(),
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) {
      ErrorLogger.error(error)
      throw error;
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
