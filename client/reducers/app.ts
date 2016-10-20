import { combineReducers } from 'redux';

import ActionTypes from '../action-types/app';

interface action {
  type: ActionTypes,
  payload
}

interface state {
  users: any[]
}

const initialState: state = {
  users: []
};

export default function appReducer(state: state = initialState, action: action): state {
  switch(action.type){
    case ActionTypes.SET_USERS:
    return Object.assign({}, state, { users: [ ...action.payload ] } )
    default:
    return state;
  }
}