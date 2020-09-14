import React from 'react';
import { shallow } from 'enzyme';
import ListItemWrapper from './ListItemWrapper';
import ListItem from '../ListItem';
import ListItemWithNestedLists from '../ListWithNestedLists';
import { lists } from '../../../cypress/fixtures/lists';

const wrapper = shallow(<ListItemWrapper lists={lists} />);

describe('ListItemWrapper', () => {
  test('should render ListItem', () => {
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });

  test('should render ListItemWithNestedLists', () => {
    expect(
      wrapper.find(ListItemWithNestedLists),
    ).toHaveLength(1);
  });
});
