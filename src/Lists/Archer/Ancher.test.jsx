import React from 'react';
import { shallow } from 'enzyme';
import Archer from './Archer';
import { getColors } from '../useStyles';

describe('Archer', () => {
  test('should not render when list is not array', () => {
    const wrapper = shallow(<Archer lists={[]} />);
    expect(wrapper.getElement()).toBeNull();
  });
});

describe('useStyles', () => {
  test('should return darkMode colors without underline', () => {
    expect(
      getColors({ underline: false, darkMode: true }),
    ).toEqual({
      borderBottom: '1px solid transparent',
      'color': '#fff',
    });
  });

  test('should return darkMode colors with underline', () => {
    expect(
      getColors({ underline: true, darkMode: true }),
    ).toEqual({
      borderBottom: '1px solid #fff',
      'color': '#fff',
    });
  });

  test('should return default colors without underline', () => {
    expect(
      getColors({ underline: false, darkMode: false }),
    ).toEqual({
      borderBottom: '1px solid transparent',
      'color': '#000',
    });
  });

  test('should return default colors with underline', () => {
    expect(
      getColors({ underline: true, darkMode: false }),
    ).toEqual({
      borderBottom: '1px solid #000',
      'color': '#000',
    });
  });
});
