import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required().trim(),
      description: Joi.string().required().trim(),
      departament: Joi.string().required().trim(),
      brand: Joi.string().required().trim(),
      price: Joi.number().min(0.01).max(1000).required(),
      qtd_stock: Joi.number().max(100000).required(),
      bar_codes: Joi.string().length(13).required().trim(),
      stock_control_enebled: Joi.boolean(),
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw error;
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
