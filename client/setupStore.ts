import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';

export default (): Redux.Store<{}> => {
  const store: Redux.Store<{}> = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

  return store;
}