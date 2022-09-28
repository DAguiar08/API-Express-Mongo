import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      titulo: Joi.string().required(),
      descricao: Joi.string().required(),
      departamento: Joi.string().required(),
      marca: Joi.string().required(),
      price: Joi.number().min(0.01).max(1000).required(),
      qtd_stock: Joi.number().max(100000).required(),
      bar_codes: Joi.string().length(13).required(),
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
