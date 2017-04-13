import * as Immutable from 'seamless-immutable';
import { ImmutableArray } from 'seamless-immutable';
import { combineReducers } from 'redux';

import {
  Action,
  ActionTypes
} from './actions';

import {
  User
} from './entities';

function users(users: ImmutableArray<User> = Immutable.from([]), action: Action): ImmutableArray<User> {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return Immutable.from(action.payload);
  }
  return users;
};

export default combineReducers({
  users
});