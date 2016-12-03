import * as React from 'react';
import * as Immutable from 'seamless-immutable';
import { ImmutableArray } from 'seamless-immutable';
import { User } from '../entities';

interface UserListProps {
  users: ImmutableArray<User>
}

export default ({ users = Immutable.from([]) }: UserListProps) =>
  <div>
    {JSON.stringify(users)}
  </div>