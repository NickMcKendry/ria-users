import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';
import selectUsers from '../selectors/users';

export const UserList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Users</div>
      <div className="show-for-desktop">User</div>
      <div className="show-for-desktop">Address</div>
    </div>
    <div className="list-body">
    {
      props.users.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No users</span>
        </div>
      ) : (
        props.users.map((user) => (
          <UserListItem key={user.id} {...user} />
        ))
      )
    }
  </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, state.filters)
  }
};

export default connect(mapStateToProps)(UserList);
