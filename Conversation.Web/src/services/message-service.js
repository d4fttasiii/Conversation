import axios from 'axios';
import { ENVIRONMENT } from '../environments/environment'

export class MessageService {

   getMessages() {
      return axios(`${ENVIRONMENT.api}/${ENVIRONMENT.messagesEndpoint}`).then(
         response => response.data.map(d => d._source),
         error => {
            console.error(`Error while getting messages ${JSON.stringify(error)}`);
         }
      );
   }

   sendMessage(message) {
      return axios.post(`${ENVIRONMENT.api}/${ENVIRONMENT.messagesEndpoint}`, message).then(
         response => {
            console.log('Message Created!');
         },
         error => {
            console.error(`Error while getting messages ${JSON.stringify(error)}`);
         }
      );
   }
}