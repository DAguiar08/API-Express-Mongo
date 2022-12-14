import { NextFunction, Request, Response } from "express";
import coreJoi from "joi";
import joiDate from "@joi/date";
import ValidateCpf from "../../utils/CpfValidation";
import ErrorLogger from "../../loggers/ErrorLogger";
const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

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
          .custom((cpf, help) => {
            if (!ValidateCpf(cpf)) return help.message(cpf);
            return req.body;
          })
          .required(),
          email: Joi.string()
           .trim()
           .email()
           .required(),
          birthday: Joi.date()
          .format("DD/MM/YYYY")
          .max('now')
          .required()
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
