import moment from 'moment';

export default (users, { text, sortBy, birthDate, endDate }) => {

  return users.filter((user) => {
    const createdAtMoment = moment(user.createdAt)

    const birthDateMatch = birthDate ? birthDate.isSameOrBefore(createdAtMoment, 'day') : true;

    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    const name = user.firstName + user.lastName

    const textMatch = name.toLowerCase().includes(text.toLowerCase());

    return birthDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'first-name') {
      return a.amount < b.amount ? 1 : -1;
    } else if(sortBy === 'last-name') {
      return a.amount < b.amount ? 1 : -1;
    } else if(sortBy === 'address') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}
