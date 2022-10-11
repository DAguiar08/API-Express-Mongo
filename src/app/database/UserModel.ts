import mongoose, { Schema } from "mongoose";

const ValidateEmail = function(email: string) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
}

const UserModel = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        cpf: {type: String, required: true, unique: true},
        email: {
            type: String,
            required: true, 
            unique: true,
            validate: [ValidateEmail, 'Please fill a valid email adress'],
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
        birthday: {type: Date, required: true}
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserModel)

export default User