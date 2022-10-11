/* eslint-disable prefer-const */
import mongoose, { Schema } from "mongoose";

const ValidateEmail = function(email: string) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
}

function formatDate(date: string | number | Date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
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
        birthday: {
            type: String, 
            required: true,
            set: (date: string | number | Date) => formatDate(date)
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserModel)

export default User