/* eslint-disable prefer-const */
import mongoose, { Schema } from "mongoose";
import ValidateCPF from "../utils/CpfValidation";
import ValidateEmail from "../utils/EmailValidation";

const UserModel = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        cpf: {
            type: String,
            required: true,
            length: 11, 
            unique: true,
            validate: [ValidateCPF, 'Please fill a with a valid CPF XXX.XXX.XXX-XX'],
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            validate: [ValidateEmail, 'Please fill a valid email adress'],
        },
        birthday: {
            type: Date, 
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserModel)

export default User