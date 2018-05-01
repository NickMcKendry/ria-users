import React from 'react';
import { shallow } from 'enzyme';
import { UserListFilters } from '../../components/UserListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByFirstName, sortByLastName, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByFirstName = jest.fn();
  sortByLastName = jest.fn();
  wrapper = shallow(
    <UserListFilters
      setTextFilter={setTextFilter}
      sortByFirstName={sortByFirstName}
      sortByLastName={sortByLastName}
      filters={filters}
    />
  );
});

test('Should render UserListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render UserListFilters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  const value = altFilters.text
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('Should sort by firstName', () => {
  const value = 'first-name'

  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByFirstName).toHaveBeenCalled();
});

test('Should sort by lastName', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'last-name' }
  });
  expect(sortByLastName).toHaveBeenCalled();
});
