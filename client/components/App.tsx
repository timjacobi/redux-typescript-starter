import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionTypes, requestUsers } from '../actions';

interface AppProps {
  requestUsers: Function,
  users
}

export function App({ requestUsers, users } : AppProps){
  return (
    <div>
      <button onClick={() => requestUsers() }>Request Users</button>
      <br />
      { !!users.length && JSON.stringify(users) }
    </div>
  );
}

export default connect(({ users }) => ({ users }), { requestUsers })(App);