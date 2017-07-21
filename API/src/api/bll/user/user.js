'use strict';
import extend from 'extend';
import { mongoose, userSchema, userModel } from '../../models/userModel';

/* get user */

const getUserList = () => {
    return userModel.find().sort({ CreateAt: 'asc' });
}

const getUserPageList = (pageSize, pageIndex) => {
    return userModel.find().skip(pageSize * (pageIndex - 1)).limit(pageSize).sort({ CreateAt: 'asc' });
}

const getUserByID = (userID) => {
    return userModel.findById(userID);
}

/* user operation */

const createUser = (userObject) => {
    let userEntity = new userModel(userObject);
    return userEntity.save()
        .then(data => {
            return [data];
        });
}

const updateUser = (userID, userObject) => {
    let options = extend(
        true,
        {},
        {
            $push: {
                logs: userObject
            }
        },
        {
            $set: userObject
        }
    )

    return userModel.findByIdAndUpdate(
        userID,
        options, {
            new: true
        }).then(data => {
            return data
        });
}

const removeUser = (userID) => {
    return userModel.findByIdAndRemove(userID)
        .then(data => {
            return data
        });
}

export {
    getUserList,
    getUserPageList,
    getUserByID,
    createUser,
    updateUser,
    removeUser
}