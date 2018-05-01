import React from 'react';
import UserListItem from '../../components/UserListItem';
import { shallow } from 'enzyme';
import users from '../fixtures/users';

test('Should render user list item', () => {
  const wrapper = shallow(<UserListItem {...users[0]} />);
  expect(wrapper).toMatchSnapshot();
});
