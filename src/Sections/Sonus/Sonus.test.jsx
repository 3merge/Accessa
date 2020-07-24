import React from 'react';
import { shallow } from 'enzyme';
import Sonus, { Article, Section } from './Sonus';
import { articles } from '../../../cypress/fixtures/sections';

describe('Sonus', () => {
  it('should render a maximum of 4', () => {
    const el = shallow(
      // fixture contains 4 items
      <Sonus data={[...articles, ...articles]} />,
    );

    const a = el.find(Article);
    expect(a).toHaveLength(8);
    expect(a.first().props()).toHaveProperty('gridSize', 4);
  });

  it('should not render anything without data', () => {
    const el = shallow(<Sonus />);
    expect(el.find(Section)).toHaveLength(0);
  });
});
