import React from 'react';
import { UserList } from '../../components/UserList';
import { shallow } from 'enzyme';
import users from '../fixtures/users';

test('Should render user list with users', () => {
  const wrapper = shallow(<UserList users={users} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render user list with no users', () => {
  const wrapper = shallow(<UserList users={[]} />);
  expect(wrapper).toMatchSnapshot();
});
