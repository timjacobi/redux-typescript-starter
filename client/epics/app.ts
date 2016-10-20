import * as Rx from 'rxjs';

import ActionTypes from '../action-types/app';

const { ajax } = Rx.Observable;

export default function fetchUserEpic(action$){
  return action$.ofType(ActionTypes.REQUEST_USERS)
    .mergeMap((action) =>
      ajax.getJSON(`http://jsonplaceholder.typicode.com/users`)
        .map((payload) => ({ type: ActionTypes.SET_USERS, payload })
      )
    );
};