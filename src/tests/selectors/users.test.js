import selectUsers from '../../selectors/users';
import users from '../fixtures/users';

test('Should filter by text value', () => {
  const filters = {
    text: 'i',
    sortBy: 'first-name',
  }
  const result = selectUsers(users, filters);
  expect(result).toEqual([
    users[0]
  ]);
});

test('Should sort by first name', () => {
  const filters = {
    text: '',
    sortBy: 'first-name'
  }
  const result = selectUsers(users, filters);
  expect(result).toEqual([
    users[2],
    users[1],
    users[0]
  ]);
});

test('Should sort by lastName', () => {
  const filters = {
    text: '',
    sortBy: 'last-name'
  }
  const result = selectUsers(users, filters);
  expect(result).toEqual([
    users[2],
    users[1],
    users[0]
  ]);
});
