import * as React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';

import Root from './components/Root';

const store : Redux.Store<{}> = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

render(<Root store={store} />, document.getElementById('app'));