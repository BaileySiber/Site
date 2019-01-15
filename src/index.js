import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Main from './pages/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
