import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppSetupHelpers from './components/general-helpers/AppSetupHelpers';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import 'semantic-ui/dist/semantic.min.css';

ReactDOM.render(
  <HashRouter>
    <AppSetupHelpers>
      <App />
    </AppSetupHelpers>
  </HashRouter>, 
  document.getElementById('vote-remote')
);
registerServiceWorker();
