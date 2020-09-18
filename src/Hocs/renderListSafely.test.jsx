import React from 'react';
import { shallow } from 'enzyme';
import renderListSafely from './renderListSafely';
import Tree from '../Lists/Tree';
import { treeList } from '../../cypress/fixtures/lists';

const Component = renderListSafely(Tree);

describe('"renderListSafely"', () => {
  it('should return null when lists prop is not valid', () => {
    const case1 = shallow(<Component lists={null} />);
    const case2 = shallow(<Component lists={2} />);
    const case3 = shallow(<Component />);

    expect(case1.getElement()).toBeNull();
    expect(case2.getElement()).toBeNull();
    expect(case3.getElement()).toBeNull();
  });

  it('should render when it gets an array', () => {
    const wrapper = shallow(<Component list={treeList} />);

    expect(wrapper).toBeDefined();
  });
});
