import * as Rx from 'rxjs';
import { combineEpics } from 'redux-observable';

import { ActionTypes } from './actions';

const { ajax } = Rx.Observable;

export function fetchUserEpic(action$){
  return action$.ofType(ActionTypes.REQUEST_USERS)
    .mergeMap((action) =>
      ajax.getJSON(`http://jsonplaceholder.typicode.com/users`)
        .map((payload) => ({ type: ActionTypes.SET_USERS, payload })
      )
    );
};

export default combineEpics(fetchUserEpic);