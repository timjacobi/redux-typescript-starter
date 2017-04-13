export enum ActionTypes {
  REQUEST_USERS,
  SET_USERS
}

export interface Action extends Redux.Action {
  readonly type: ActionTypes,
  readonly payload?
}

export function requestUsers() : Action {
  return {
    type: ActionTypes.REQUEST_USERS
  }
}