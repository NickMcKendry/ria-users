import database from '../firebase/firebase';

// ADD_USER

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const startAddUser = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      firstName = '',
      lastName = '',
      address = 0,
      createdAt = 0
    } = userData;

    const user = {
      firstName,
      lastName,
      address,
      createdAt
    };

    return database.ref(`users/${uid}/users`).push(user).then((ref) => {
      dispatch(addUser({
        id: ref.key,
        ...user
      }));
    });
  };
};

// REMOVE_USER

export const removeUser = ({ id } = {}) => ({
  type: 'REMOVE_USER',
  id
});

export const startRemoveUser = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/users/${id}`).remove().then(() => {
      dispatch(removeUser({
        id
      }))
    })
  }
};

// EDIT_USER

export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});

export const startEditUser = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/users/${id}`).update(updates).then(() => {
      dispatch(editUser(id, updates))
    });
  };
};

// SET_USERS

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/users`).once('value').then((snapshot) => {
      const users = [];

      snapshot.forEach((childSnapshot) => {
        users.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setUsers(users));
    });
  };
};
