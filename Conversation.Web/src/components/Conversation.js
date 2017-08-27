import React, { Component } from 'react';

import { Message } from './Message';

export class Conversation extends Component {
   render() {
      return (
         <div className="mt-3 mb-3">
            {
               this.props.messages.map((m, i) =>
                  <div key={i} className={i % 2 === 0 ? 'mt-3 mb-3' : 'mt-3 mb-3'}>
                     <Message key={i} message={m}></Message>
                  </div>)
            }
         </div>
      );
   }
}