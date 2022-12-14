import { IUser } from "../interfaces/UserInterface";
import ValidateDKUser from "./ValidateDKuser";

async function getCorrectPayload(payload: IUser) {
    await ValidateDKUser(payload)
    const tempDateArray = payload.birthday.toString().split('/');
    const formateBirthday = [tempDateArray[2], tempDateArray[1], tempDateArray[0]].join('/')
    const newPayload = {
      "name": payload.name,
      "password": payload.password,
      "cpf": payload.cpf,
      "email": payload.email,
      "birthday": new Date(formateBirthday)
    }
    return newPayload
  }

  export default getCorrectPayload