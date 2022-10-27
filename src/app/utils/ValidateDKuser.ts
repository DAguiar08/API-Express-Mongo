import User from "../database/UserModel";
import DuplicateKey from "../errors/DuplicateKey";
import { IUser } from "../interfaces/UserInterface";

export default async function ValidateDKUser(payload: IUser) {
    const verifyCpf = await User.findOne({cpf: payload.cpf})
    const verifyEmail = await User.findOne({email: payload.email})
    if(verifyCpf) {
        throw new DuplicateKey(payload.cpf)
    }
    if(verifyEmail) {
        throw new DuplicateKey(payload.email)
    }
}

