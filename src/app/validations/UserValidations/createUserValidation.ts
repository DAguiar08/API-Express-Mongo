import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import BadRequest from "../../errors/BadRequest";
import ValidateCPF from "../../utils/CpfValidation";


export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
        name: Joi.string()
        .trim()
        .required(),
        password: Joi.string()
         .trim()
         .required(),
        cpf: Joi.string()
        .trim()
        .min(14)
        .max(14)
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).message("Invalid CPF")
        .custom((cpf: string) => {
          if(!ValidateCPF(cpf)) throw new BadRequest(cpf)
        })
        .required(),
        email: Joi.string()
         .trim()
         .required(),
        birthday: Joi.date()
        .required()
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