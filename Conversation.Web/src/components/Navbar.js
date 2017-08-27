import React, { Component } from 'react';

export class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand text-white"><i className="fa fa-fw fa-wechat"></i><span className="ml-1">Conversation</span></a>            
         </nav>
      );
   }
}
