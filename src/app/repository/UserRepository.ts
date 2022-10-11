import { FilterQuery } from "mongoose";
import UserModel from "../database/UserModel";
import User from "../database/UserModel";
import { IUser, IUserResponse } from "../interfaces/UserInterface";


class UserRepository {
    async create(payload: IUser): Promise<IUserResponse> {
        return await UserModel.create(payload);
    }

    async find(payload: FilterQuery<IUser>): Promise<typeof User | unknown> {
        return await UserModel.find(payload);
    }

    async findById(id: string): Promise<typeof User | null> {
        return UserModel.findById(id);
    }

    async delete(id: string): Promise<typeof User | null> {
        return UserModel.findByIdAndDelete(id);
    }

    async update(id: string, payload: IUser): Promise<typeof User | null> {
        return User.findByIdAndUpdate(id, payload);
    }

  
}

export default new UserRepository()