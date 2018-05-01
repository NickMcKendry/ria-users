import React from 'react';
import { shallow } from 'enzyme';
import { EditUserPage } from '../../components/EditUserPage';
import users from '../fixtures/users';

let  editUser, removeUser, wrapper, history;

beforeEach(() => {
  editUser = jest.fn();
  removeUser = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditUserPage
      editUser={editUser}
      removeUser={removeUser}
      history={history}
      user={users[1]}
    />
  );
})

test('Should render EditUserPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editUser', () => {
  wrapper.find('UserForm').prop('onSubmit')(users[1], users[1].id);
  expect(editUser).toHaveBeenLastCalledWith(users[1].id, users[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle removeUser', () => {
  wrapper.find('button').simulate('click');
  expect(removeUser).toHaveBeenLastCalledWith({ id: users[1].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
