import * as React from 'react';
import { Provider } from 'react-redux';

import App from './App';

import { State } from '../reducers';

interface RootProps {
  store: Redux.Store<State>
}

export default ({ store } : RootProps) =>
  <Provider store={store}>
    <App />
  </Provider>