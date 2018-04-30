import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ id, firstName, lastName, address, createdAt }) => (
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{firstName} {lastName}</h3>
      </div>
      <h3 className="list-item__data">{address}</h3>
    </Link>
);

export default UserListItem;
