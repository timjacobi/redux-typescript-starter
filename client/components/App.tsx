import * as React from 'react';
import { connect } from 'react-redux';
import { ImmutableArray } from 'seamless-immutable';

import UserList from './UserList';

import {
  ActionTypes,
  requestUsers
} from '../actions';

import {
  User
} from '../entities';

interface AppProps {
  requestUsers: Function,
  users: User[]
}

export const App = ({ requestUsers, users }: AppProps) =>
  <div>
    <button onClick={() => requestUsers()}>Request Users</button>
    <br />
    <UserList users={users} />
  </div>

export default connect(({ users }) => ({ users }), { requestUsers })(App);