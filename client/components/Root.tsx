import * as React from 'react';
import { Provider } from 'react-redux';

import App from './App';

interface RootProps {
  store: Redux.Store<{}>
}

export default ({ store } : RootProps) =>
  <Provider store={store}>
    <App />
  </Provider>