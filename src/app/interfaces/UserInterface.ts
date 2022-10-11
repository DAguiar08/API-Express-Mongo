import { Types } from "mongoose"

export interface IUser {
    name: string,
    password: string,
    cpf: string
    email: string
    birthday: string
}

export interface IUserResponse {
    name: string,
    password: string,
    cpf: string
    email: string
    birthday: string
    __v?: number
    _id: Types.ObjectId
}