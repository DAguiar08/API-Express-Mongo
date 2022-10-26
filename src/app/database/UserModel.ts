import mongoose, { Schema } from "mongoose";
import ValidateEmail from "../utils/EmailValidation";
import bcrypt from "bcrypt"
import mongoosePaginate from "mongoose-paginate-v2"
import { IUser } from "../interfaces/UserInterface";

const UserModel = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, select: false, required: true},
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
            max: new Date(),
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


  
  UserModel.plugin(mongoosePaginate)
  
  interface ILogin extends mongoose.Document {
    name: string,
    password: string,
    cpf: string
    email: string
    birthday: Date
  }

const User = mongoose.model<IUser, mongoose.PaginateModel<ILogin>>("User", UserModel)



User.prototype.checkPassword = function(password: string) {
    return bcrypt.compare(password, this.password.hash)
}

export default User