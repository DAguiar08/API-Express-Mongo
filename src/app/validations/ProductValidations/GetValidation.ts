import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import ErrorLogger from "../../loggers/ErrorLogger";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      title: Joi.string().trim(),
      description: Joi.string().trim(),
      departament: Joi.string().trim(),
      brand: Joi.string().trim(),
      price: Joi.number().min(0.01).max(1000),
      qtd_stock: Joi.number().max(100000),
      bar_codes: Joi.string().length(13).trim(),
      stock_control_enebled: Joi.boolean(),
    });

    const { error } = await schema.validate(req.query, { abortEarly: false });
    if (error) {
      ErrorLogger.error(error)
      throw error;
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
