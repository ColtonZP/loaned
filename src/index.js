import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'mobx-react';

import OwedStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider OwedStore={OwedStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
