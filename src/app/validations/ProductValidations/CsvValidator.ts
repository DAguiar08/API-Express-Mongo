import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import ErrorLogger from "../../loggers/ErrorLogger";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.array().items(
        Joi.object({
          title: Joi.string().required().trim(),
          description: Joi.string().required().trim(),
          departament: Joi.string().required().trim(),
          brand: Joi.string().required().trim(),
          price: Joi.number().min(0.01).max(1000).required(),
          qtd_stock: Joi.number().max(100000).required(),
          bar_codes: Joi.string().length(13).required().trim(),
          stock_control_enebled: Joi.boolean(),
          created_at: Joi.date(),
        })
      );
    const { error } = await schema.validate([], {abortEarly: false});
    if (error) {
      ErrorLogger.error(error)
      throw error;
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
