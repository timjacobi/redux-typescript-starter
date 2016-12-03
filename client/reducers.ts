import * as Immutable from 'seamless-immutable';
import { ImmutableArray } from 'seamless-immutable';
import { combineReducers } from 'redux';

import { 
  Action, 
  ActionTypes 
} from './actions';

function users(users: ImmutableArray<any> = Immutable.from([]), action: Action): ImmutableArray<any> {
  switch(action.type){
    case ActionTypes.SET_USERS:
    return Immutable.from(action.payload);
    default:
    return users;
  }
};

export default combineReducers({
  users
});