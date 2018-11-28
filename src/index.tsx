import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../src/components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
