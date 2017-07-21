import { createUser, updateUser, removeUser } from './user';

const createAUser = (userObject) => {
    return createUser(userObject);
}

const updateAUser = (userID, userObject) => {
    console.log({ userID, userObject });
    return updateUser(userID, userObject);
}

const removeAUser = (userID) => {
    return removeUser(userID);
}

export {
    createAUser,
    updateAUser,
    removeAUser
}