import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleUsers from '../selectors/users';


export const UsersSummary = ({ userCount }) => {
  const userWord = userCount === 1 ? 'user' : 'users';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{userCount}</span> {userWord}</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add User</Link>
        </div>
      </div>
    </div>
  );
};





const mapStateToProps = (state) => {
  const visibleUsers = getVisibleUsers(state.users, state.filters);
  return {
    userCount: visibleUsers.length,
  };
};

export default connect(mapStateToProps)(UsersSummary);
