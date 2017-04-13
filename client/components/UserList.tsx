import * as React from 'react';
import * as Immutable from 'seamless-immutable';
import { User } from '../entities';

interface UserListProps {
  users: User[]
}

export default ({ users = [] }: UserListProps) =>
  <div>
    {JSON.stringify(users)}
  </div>