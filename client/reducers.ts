import * as SI from 'seamless-immutable';

import { 
  Action, 
  ActionTypes 
} from './actions';

interface StateShape {
  users: any[]
}

export interface State extends SI.ImmutableObject<StateShape> {}

export default function rootReducer(state: State = SI.from({ users: [] }), action: Action): State {
  switch(action.type){
    case ActionTypes.SET_USERS:
    return state.set("users", action.payload);
    default:
    return state;
  }
}