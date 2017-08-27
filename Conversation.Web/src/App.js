import React, { Component } from 'react';
import { Form } from './components/Form';
import io from 'socket.io-client';

import { Conversation } from './components/Conversation';
import { ENVIRONMENT } from './environments/environment';
import { Navbar } from './components/Navbar';
import { Participants } from './components/Participants';
import { MessageService } from './services/message-service';

class App extends Component {

  _messageService = new MessageService();
  _socket = io.connect(ENVIRONMENT.api);

  constructor() {
    super();
    this.state = {
      messages: []
    };
    const socket = this._socket;
    socket.on('connect', function () {
    });
    socket.on('update-message-list', () => this._loadMessages());
  }

  componentDidMount() {
    this._loadMessages();
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar></Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Participants></Participants>
            </div>
            <div className="col-md-9">
              <Conversation messages={this.state.messages}></Conversation>
              <Form post={this._sendMessage.bind(this)}></Form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _sendMessage(newMessage) {
    this._messageService.sendMessage({
      username: 'Tony Stark',
      text: newMessage
    }).then(
      success => {
        this._socket.emit('message-sent');
      },
      error => {
        console.error(`Error while sending new message: ${JSON.stringify(error)}`);
      });
  }

  _loadMessages() {
    this._messageService.getMessages().then(messages => {
      this.setState({
        messages: messages
      });
    });
  }
}

export default App;
