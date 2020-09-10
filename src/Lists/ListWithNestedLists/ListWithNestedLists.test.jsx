import React from 'react';
import { mount } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListWithNestedLists from './ListWithNestedLists';

const nestedItems = [
  {
    listItemText: 'Nested',
    onClick: () => console.log('Nested'),
  },
  {
    listItemText: 'Wow',
    onClick: () => console.log('Wow'),
  },
];

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
