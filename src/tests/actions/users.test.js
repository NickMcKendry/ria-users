import {
  setUsers,
  startSetUsers,
  startAddUser,
  addUser,
  startRemoveUser,
  removeUser,
  startEditUser,
  editUser
} from '../../actions/users';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import users from '../fixtures/users';
import database from '../../firebase/firebase';

const uid = 'testuid'
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const usersData = {};
  users.forEach(({ id, firstName, lastName, address }) => {
    usersData[id] = { firstName, lastName, address }
  });
  database.ref(`users/${uid}/users`).set(usersData).then(() => done());
});

test('Should setup object to remove a user', () => {
  const action = removeUser({ id: '1' });
  expect(action).toEqual({
    type: 'REMOVE_USER',
    id: '1'
  });
});

test('Should setup object to edit user', () => {
  const action = editUser('1', { firstName: 'Bob' });
  expect(action).toEqual({
    type: 'EDIT_USER',
    updates: { firstName : 'bob'},
    id: '1'
  });
});

test('Should setup object to add user with provided values', () => {
  const userData = {
    firstName: 'Nick',
    lastName: 'McKendry',
    address: '9803 w. 83rd ave.'
  };
  const action = addUser(users[2]);
  expect(action).toEqual({
    type: 'ADD_USER',
    user: user[2]
  });
});

test('should add user to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const userData = {
    firstName: 'Nick',
    lastName: 'McKendry',
    address: '9803 w. 83rd ave.'
  };

  store.dispatch(startAddUser(userData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_USER',
      user: {
        id: expect.any(String),
        ...userData
      }
    });

    return database.ref(`users/${uid}/users/${actions[0].user.id}`)
    .once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(usereData);
    done();
  });
});

test('should add user to database and store with defaults', (done) => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startAddUser({  })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_USER',
      user: {
        id: expect.any(String),
        firstName: '',
        lastName: '',
        address: ''
      }
    });

    return database.ref(`users/${uid}/users/${actions[0].user.id}`)
    .once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({
      firstName: '',
      lastName: '',
      address: '',
    });
    done();
  });
});

test('should setup set user object with data', () => {
  const action = setUsers(users);

  expect(action).toEqual({
    type: 'SET_USERS',
    users
  });
});

test('Should fetch users from firebase db', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetUsers()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_USERS',
      users
    });
    done();
  });
});

test('Should remove user from db', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = users[0].id
  store.dispatch(startRemoveUser({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_USER',
      id
    });
    return database.ref(`users/${uid}/users/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  })
});

test('should edit user from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = users[0].id;
  const updates = { firstName: 'Bob' };
  store.dispatch(startEditUser(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_USER',
      id,
      updates
    });
    return database.ref(`users/${uid}/users/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().firstName).toBe(updates.firstName);
    done();
  });
});
