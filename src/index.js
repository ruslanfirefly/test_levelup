import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
