import React, { Component } from 'react';

export class Form extends Component {

   constructor() {
      super();
      this.state = {
         message: ''
      };
   }

   render() {
      return (
         <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter your message" value={this.state.message} onChange={this._handleChange.bind(this)} />
            <span className="input-group-btn">
               <button className="btn btn-primary" type="button" onClick={this._postMessage.bind(this)} disabled={!this.state.message.length}>
                  <i className="fa fa-fw fa-send"></i>
               </button>
            </span>
         </div>
      );
   }

   _handleChange(event) {
      this.setState({ message: event.target.value });
   }

   _postMessage() {
      if (!this.state.message.length) {
         return;
      }
      this.props.post(this.state.message);
      this.setState({ message: '' });
   }
}