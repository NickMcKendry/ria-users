import React from 'react';
import ReactDOM from 'react-dom';
import UsersSummary from './UsersSummary';
import UserListFilters from './UserListFilters';
import UserList from './UserList';

const DashboardPage = () => (
  <div>
    <UsersSummary />
    <UserListFilters />
    <UserList />
  </div>
);

export default DashboardPage;
