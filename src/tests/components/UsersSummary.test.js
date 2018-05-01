import React from 'react';
import { shallow } from 'enzyme';
import { UsersSummary } from '../../components/UsersSummary';

test('Should render single user summary', () => {
  const wrapper = shallow(<UsersSummary userCount={1} usersTotal={150} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render multiple users summary', () => {
  const wrapper = shallow(<UsersSummary userCount={2} usersTotal={250} />);
  expect(wrapper).toMatchSnapshot();
});
