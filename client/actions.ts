export enum ActionTypes {
  REQUEST_USERS,
  SET_USERS
}

export interface Action extends Redux.Action {
  type: ActionTypes,
  payload?
}

export function requestUsers() : Action {
  return {
    type: ActionTypes.REQUEST_USERS
  }
}