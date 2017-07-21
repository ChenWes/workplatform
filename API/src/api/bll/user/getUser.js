'use strict';
import { getUserList, getUserPageList, getUserByID } from './user';

const getAllUser = () => {
    return getUserList()
        .then(Data => [Data]);
}

const getUserSingleData = (userID) => {
    return userID ?
        getUserByID(userID)
            .then(Data => [Data]) :
        new Promise((resolve, reject) => resolve([]));
}
const getUserListWithPage = (pageSize, pageIndex) => {
    return getUserPageList(pageSize, pageIndex)
        .then(Data => [Data]);
}

export {
    getAllUser,
    getUserListWithPage,
    getUserSingleData
}