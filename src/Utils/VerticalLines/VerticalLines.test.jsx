import React from 'react';
import { shallow } from 'enzyme';
import VerticalLines, { Span } from './VerticalLines';

describe('VerticalLines', () => {
  it('should iterate between 0 and 100', () => {
    const el = shallow(<VerticalLines count="5" />);
    const spans = el.find(Span);
    expect(spans).toHaveLength(6);
    // the first property will render 0
    expect(spans.at(1).props()).toHaveProperty(
      'left',
      '16.67%',
    );
  });

  it('should render nothing', () => {
    const el = shallow(<VerticalLines count="foo" />);
    const spans = el.find(Span);
    expect(spans).toHaveLength(0);
  });
});
