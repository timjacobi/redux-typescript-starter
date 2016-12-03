import * as React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import Root from './components/Root';
import rootReducer from './reducers';
import rootEpic from './epics';

const store = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

render(<Root store={store} />, document.getElementById("app"));