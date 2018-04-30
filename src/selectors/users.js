export default (users, { text, sortBy }) => {

  return users.filter((user) => {

    const name = user.firstName + ' ' + user.lastName;

    const textMatch = name.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if(sortBy === 'first-name') {
      return a.firstName < b.firstName ? -1 : 1;
    } else if(sortBy === 'last-name') {
      return a.lastName < b.lastName ? -1 : 1;
    }
  });
};
