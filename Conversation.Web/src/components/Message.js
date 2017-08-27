import React, { Component } from 'react';

export class Message extends Component {

    constructor() {
        super();
        this.state = {
            sendingDateVisible: false
        }
    }

    render() {
        const style = `badge badge-pill badge-primary clickable animated rubberBand ${this.props.orientation}`;

        return (
            <span className={style} onClick={this._toggleSendingDate.bind(this)}>
                <b>{this.props.message.username}</b>: {this.props.message.text}
                {this.state.sendingDateVisible ? <i className="ml-2">@ {this.props.message.sentAt}</i> : ''}
            </span>
        );
    }

    _toggleSendingDate() {
        this.setState({
            sendingDateVisible: !this.state.sendingDateVisible
        });
    }
}