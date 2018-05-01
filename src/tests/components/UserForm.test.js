import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../components/UserForm';
import users from '../fixtures/users';

test('Should render UserForm', () => {
  const wrapper = shallow(<UserForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render UserForm with data', () => {
  const wrapper = shallow(<UserForm user={users[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<UserForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set first name on input change', () => {
  const value = 'Nick';
  const wrapper = shallow(<UserForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('firstName')).toBe(value);
});

test('Should call onSubmit prop for valid form submit', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<UserForm user={users[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    firstName: users[0].firstName,
    lastName: users[0].lastName,
    address: users[0].address
  });
});
