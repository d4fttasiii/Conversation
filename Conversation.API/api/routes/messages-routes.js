'use strict';

module.exports = function (app) {
  var messagesController = require('../controllers/messages-controller');

  app.route('/messages')
    .get(messagesController.listAllMessages)
    .post(messagesController.sendMessage);

  app.route('/')
    .get(messagesController.socketIoInit);
};