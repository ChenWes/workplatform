'use strict';
import md5 from 'md5';
import { responseFormat } from '../common/responseFormat';
import { getAllUser, getUserListWithPage, getUserSingleData } from '../bll/user/getUser';
import { createAUser, updateAUser, removeAUser } from '../bll/user/operUser';

/* get user */

exports.ListAllUser = (req, res) => {
    try {        
        getAllUser()
            .then((users) => {
                return res.status(200).json(responseFormat(null, users));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
};

exports.GetSingleUser = (req, res) => {
    try {
        getUserSingleData(req.params.id)
            .then((user) => {
                return res.status(200).json(responseFormat(null, user));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
};

exports.GetUserListPage = (req, res) => {
    try {
        let pageSize = 20;
        let pageIndex = 1;

        if (req.params.size) {
            pageSize = parseInt(req.params.size, 10);
        }
        if (req.params.index) {
            pageIndex = parseInt(req.params.index, 10);
        }

        getUserListWithPage(pageSize, pageIndex)
            .then((users) => {
                return res.status(200).json(responseFormat(null, users));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
}

/* user operation */

exports.CreateUser = (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = md5(req.body.password);
        }
        createAUser(req.body)
            .then((users) => {
                return res.status(200).json(responseFormat(null, users));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
};

exports.UpdateUser = (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = md5(req.body.password);
        }
        updateAUser(req.params.id, req.body)
            .then((users) => {
                return res.status(200).json(responseFormat(null, users));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
};

exports.DeleteUser = (req, res) => {
    try {
        removeAUser(req.params.id)
            .then((user) => {
                return res.status(200).json(responseFormat(null, user));
            })
            .catch((err) => {
                res.status(500).json(responseFormat(err, null));
            })
    }
    catch (error) {
        res.status(500).json(responseFormat(error, null));
    }
};