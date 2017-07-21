'use strict';
import userControl from '../controllers/userController';

module.exports = (app) => {
    // user Routes
    app.route('/user')
        .get(userControl.ListAllUser)
        .post(userControl.CreateUser);

    app.route('/user/:id')
        .get(userControl.GetSingleUser)
        .put(userControl.UpdateUser)
        .delete(userControl.DeleteUser);

    app.route('/user/:size/:index')
        .get(userControl.GetUserListPage);
};