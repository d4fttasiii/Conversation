import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
