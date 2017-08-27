'use strict';

const messageService = require('../services/message-service');

exports.listAllMessages = function (req, res) {
    messageService.listAllMessages(res);
};

exports.sendMessage = function (req, res) {
    messageService.sendMessage(req, res);
};

exports.socketIoInit = function (req, res) {
    res.sendStatus(200);
};