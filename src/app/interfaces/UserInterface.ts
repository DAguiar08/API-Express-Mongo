import mongoose, { Types } from "mongoose"

export interface IUser {
    name: string,
    password: string,
    cpf: string
    email: string
    birthday: Date
}

export interface IUserResponse {
    name?: string,
    password?: string,
    cpf?: string
    email?: string
    birthday?: Date
    __v?: number
    _id: Types.ObjectId
}

export interface ILogin extends mongoose.Document {
    name: string,
    password: string,
    cpf: string
    email: string
    birthday: Date
  }

