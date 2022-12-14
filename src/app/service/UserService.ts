import { FilterQuery } from "mongoose";
import { ParsedQs } from "qs";
import { IUser } from "../interfaces/UserInterface";
import UserRepository from "../repository/UserRepository";
import { Request } from "express"
import BadRequest from "../errors/BadRequest";
import NotFound from "../errors/NotFound";
import ValidateDKUser from "../utils/ValidateDKuser";

class UserService {
    async create(payload: IUser) {
        await ValidateDKUser(payload)
        const result = await UserRepository.create(payload)
        if(!result) throw new BadRequest(payload)
        return result;
    }

    async find(payload: FilterQuery<IUser> | ParsedQs) {
        const result = await UserRepository.find(payload)
        if(!result) throw new NotFound(payload)
        return result;
    }

    async findById(req: Request) {
        const result = await UserRepository.findById(req.params.id);
        if(!result) throw new NotFound(req.params.id)
        return result;
    }

    async delete(req: Request) {
        const result = await UserRepository.delete(req.params.id);
        if(!result) throw new NotFound(req.params.id)
        return result;
    }

    async update(payload: IUser, id: string) {
        await ValidateDKUser(payload)
        const result = await UserRepository.update(id, payload);
        if(!result) throw new NotFound(id)
        return result;
    }
}

export default new UserService();