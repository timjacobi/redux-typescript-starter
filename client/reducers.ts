import { combineReducers } from 'redux';

import {
  Action,
  ActionTypes
} from './actions';

import {
  User
} from './entities';

function users(users: User[] = [], action: Action): User[] {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return action.payload;
  }
  return users;
};

export default combineReducers({
  users
});