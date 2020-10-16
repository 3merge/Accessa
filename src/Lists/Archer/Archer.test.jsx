import React from 'react';
import { shallow } from 'enzyme';
import List from '@material-ui/core/List';
import { Archer } from './Archer';

const getSubHeader = (subheader) =>
  shallow(<Archer lists={[]} subheader={subheader} />)
    .find(List)
    .prop('subheader');

describe('Archer', () => {
  it('should not render subtitle', () =>
    expect(getSubHeader()).toBeNull());

  it('should render subtitle', () =>
    expect(getSubHeader('Render')).toBeDefined());
});
