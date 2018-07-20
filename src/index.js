import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui/dist/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('vote-remote'));
registerServiceWorker();