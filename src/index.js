import React from 'react';
import ReactDOM from 'react-dom';
// Project imports
import registerServiceWorker from './registerServiceWorker';
import Counter from './Counter';
// Styles
import './index.css';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
