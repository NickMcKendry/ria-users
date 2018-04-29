import moment from 'moment';

export default (users, { text, sortBy, startDate, endDate }) => {

  return users.filter((user) => {
    const createdAtMoment = moment(user.createdAt)

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;

    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    const textMatch = user.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
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
