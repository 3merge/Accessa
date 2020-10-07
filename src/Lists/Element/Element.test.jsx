import React from 'react';
import { shallow } from 'enzyme';
import { ListItemAvatar } from '@material-ui/core';
import Element from './Element';
import element from '../../../cypress/fixtures/elements.json';

const renderElement = (el, isFirst, result) => {
  const wrapper = shallow(
    <Element subtitle1="01" {...el} isFirst={isFirst} />,
  );
  expect(wrapper.find(ListItemAvatar).exists()).toBe(
    result,
  );
};

describe('Element', () => {
  it('should only render ListItemAvatar when item isFirst and has src/alt attributes', () => {
    renderElement(element[0], true, true);
  });

  const cases = [
    [element[1], true, false],
    [element[1], false, false],
    [element[0], false, false],
  ];

  it.each(cases)(
    'should not render LIstItemAvatar',
    (el, isFirst, result) => {
      renderElement(el, isFirst, result);
    },
  );
});
