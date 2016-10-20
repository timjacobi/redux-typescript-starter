import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionTypes from '../action-types/app';

export function App({ requestUsers, users } : { requestUsers: Function, users }) : JSX.Element {
  return (
    <div>
      <button onClick={() => requestUsers() }>Request Users</button>
      <br />
      { !!users.length && JSON.stringify(users) }
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    requestUsers: dispatch({ type: ActionTypes.REQUEST_USERS })
  }
}

export default connect(({ users }) => ({ users }), mapDispatchToProps)(App);