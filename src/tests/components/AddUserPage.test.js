import React from 'react';
import { shallow } from 'enzyme';
import { AddUserPage } from '../../components/AddUserPage';
import users from '../fixtures/users';

let startAddUser, history, wrapper;

beforeEach(() => {
  startAddUser = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddUserPage startAddUser={startAddUser} history={history} />)
})

test('Should render AddUserPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('UserForm').prop('onSubmit')(users[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddUser).toHaveBeenLastCalledWith(users[1]);
});
