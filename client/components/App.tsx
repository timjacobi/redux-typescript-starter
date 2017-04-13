import * as React from 'react';
import { connect } from 'react-redux';

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

export class App extends React.Component<AppProps, any>{
  constructor(props){
    super(props);
    this.props = props;
  }

  componentDidMount(){
    this.props.requestUsers();
  }

  render(){
    const { users } = this.props;

    return (
      <UserList users={users} />
    );
  }
}

export default connect(({ users }) => ({ users }), { requestUsers })(App);