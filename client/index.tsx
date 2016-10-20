import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';
import rootEpic from './epics';

const store = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

console.log(store);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("app"));