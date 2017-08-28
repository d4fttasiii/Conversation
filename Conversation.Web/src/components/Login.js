import React, { Component } from 'react';

export class Login extends Component {

   constructor() {
      super();
      this.state = {
         username: '',
         color: '',
         loggedIn: false
      };
   }

   render() {
      return (
         <div className="jumbotron mt-3">
            <h5 className="display-5">Login</h5>
            <div className="form-group">
               <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this._handleChange.bind(this)} disabled={this.state.loggedIn} />
            </div>
            <div className="form-group">
               <input type="text" className="form-control" placeholder="Color" disabled />
            </div>
            <button className="btn btn-success" onClick={this._login.bind(this)} disabled={this.state.loggedIn}>Login</button>
         </div>
      );
   }

   _login() {
      this.props.login({ username: this.state.username, color: 'primary' });
      this.setState({ loggedIn: true });
   }

   _handleChange(event) {
      this.setState({ username: event.target.value });
   }
}