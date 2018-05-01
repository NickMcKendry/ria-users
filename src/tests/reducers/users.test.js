import usersReducer from '../../reducers/users';

import users from '../fixtures/users';

test('should set default state', () => {
  const state = usersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([]);
});

test('should remove user with valid id', () => {
  const action = {
    type: 'REMOVE_USER',
    id: users[1].id
  };
  const state = usersReducer(users, action);
  expect(state).toEqual([
    users[0],
    users[2]
  ]);
});

test('should not remove user with invalid id', () => {
  const action = {
    type: 'REMOVE_USER',
    id: 5
  };
  const state = usersReducer(users, action);
  expect(state).toEqual([
    users[0],
    users[1],
    users[2]
  ]);
});

test('should add an user', () => {
  const action = {
    type: 'ADD_USER',
    user: {
      id: '4',
      firstName: 'Nick',
      lastName: 'McKendry',
      amount: '9803 w. 83rd ave.'
    }
  };
  const state = usersReducer(users, action);
  expect(state).toEqual([
    ...users,
    action.user
  ]);
});

test('should edit an user with id', () => {
  const action = {
    type: 'EDIT_USER',
    id: users[1].id,
    updates: {
      firstName: 'Bob'
    }
  };
  const state = usersReducer(users, action);
  expect(state[1].firstName).toBe('Bob');
});

test('should not edit an user with invalid id', () => {
  const action = {
    type: 'EDIT_USER',
    id: 5,
    updates: {
      firstName: 'Bob'
    }
  };
  const state = usersReducer(users, action);
  expect(state).toEqual(users);
});

test('should set users', () => {
  const action = {
    type: 'SET_USERS',
    users: [users[1]]
  };
  const state = usersReducer(users, action);
  expect(state).toEqual([users[1]]);
});
