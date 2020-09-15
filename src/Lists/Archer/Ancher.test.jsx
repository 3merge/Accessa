import React from 'react';
import { shallow } from 'enzyme';
import Archer from './Archer';

describe('Archer', () => {
  test('should not render when list is not array', () => {
    const wrapper = shallow(<Archer lists={[]} />);
    expect(wrapper.getElement()).toBeNull();
  });
});
