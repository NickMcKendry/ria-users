import React from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const UserListItem = ({ id, firstName, lastName, address, createdAt }) => (
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{firstName} {lastName}</h3>
        <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">{address}</h3>
    </Link>
);

export default UserListItem;
