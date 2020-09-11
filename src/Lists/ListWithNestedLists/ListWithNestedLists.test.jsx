import React from 'react';
import { mount } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListWithNestedLists from './ListWithNestedLists';
import { nestedItems } from '../../../cypress/fixtures/lists.js';

const list = {
  listItemText: 'World',
  nestedItems,
};

let spy;

beforeEach(() => {
  spy = jest.spyOn(React, 'useState');
});

describe('ListWithNestedLists ', () => {
  test('should toggle nested list items', () => {
    const isOpen = false;
    const setIsOpen = jest.fn();

    spy.mockReturnValue([isOpen, setIsOpen]);

    const wrapper = mount(
      <ListWithNestedLists {...list} />,
    );
    wrapper.find(ListItem).simulate('click');

    expect(setIsOpen).toHaveBeenCalledWith(!isOpen);
  });
});
