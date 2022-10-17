import mongoose, { Schema } from "mongoose";
import ValidateEmail from "../utils/EmailValidation";
import bcrypt from "bcrypt"

const UserModel = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        cpf: {
            type: String,
            required: true,
            length: 11, 
            unique: true,
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


UserModel.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next();
  });

const User = mongoose.model("User", UserModel)

export default User