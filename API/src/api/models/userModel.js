'use strict';
import mongoose from './db';
let Schema = mongoose.Schema;

let userSchema = new Schema({
    code: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Kindly enter the user code']
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Kindly enter the user name']
    },
    displayname: {
        type: String,
        trim: true,
        required: [true, 'Kindly enter the user display name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Kindly enter the user email']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Kindly enter the user password']
    },
    status: {
        type: [{
            type: String,
            enum: ['enable', 'disable']
        }],
        default: ['enable']
    },
    logs: {
        type: Array
    },
    CreateAt: {
        type: Date,
        default: Date.now
    },
    CreateBy: {
        type: String
    },
    LastUpdateAt: {
        type: Date,
        default: Date.now
    },
    LastUpdateBy: {
        type: String
    },
});

const userModel = mongoose.model('user', userSchema);

export {
    mongoose,
    userSchema,
    userModel
}