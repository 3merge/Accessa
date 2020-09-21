import React from 'react';
import { shallow } from 'enzyme';
import renderListSafely from './renderListSafely';
import Tree from '../Lists/Tree';
import { treeList } from '../../cypress/fixtures/lists';

const Component = renderListSafely(Tree);

describe('"renderListSafely"', () => {
  it.each([[null], [2], [undefined], [[]], [{}]])(
    'should return null when lists prop is not valid',
    (x) => {
      expect(
        shallow(<Component lists={x} />).isEmptyRender(),
      ).toBeTruthy();
    },
  );

  it('should render when it gets an array', () => {
    const wrapper = shallow(<Component lists={treeList} />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
