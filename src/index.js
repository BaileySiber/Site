import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Resume from './Resume';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
