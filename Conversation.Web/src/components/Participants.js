import React, { Component } from 'react';

export class Participants extends Component {

   constructor() {
      super();
      this.state = {
         users: [{
            name: 'Tony Stark',
            color: 'danger'
         }, {
            name: 'Bruce Banner',
            color: 'success'
         }, {
            name: 'Thor Odinson',
            color: 'primary'
         }, {
            name: 'Natasha Romanoff',
            color: 'black'
         }, {
            name: 'Clint Barton',
            color: 'warning'
         }, {
            name: 'Steven Rogers',
            color: 'info'
         }]
      }
   }

   render() {
      return (
         <div className="jumbotron mt-3">
            <h5 className="display-5">Participants</h5>
            <div className="input-group">
               <input type="text" className="form-control" />
               <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                     <i className="fa fa-fw fa-search"></i>
                  </button>
               </span>
            </div>
            <hr className="my-4" />
            <ul>
               {this.state.users.map((user, i) => <li key={i} className="lead">{user.name}</li>)}
            </ul>           
         </div>
      );
   }
}